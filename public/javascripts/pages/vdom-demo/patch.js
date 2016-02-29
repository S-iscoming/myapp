define([""], function(){
    //用于记录两个虚拟DOM之间差异的数据结构
    //每个节点有四种变动
    var REPLACE = 0;
    var REORDER = 1;
    var PROPS = 2;
    var TEXT = 3;

    function patch(node, patches){
        var walker = {
            index: 0
        };
        dfsWalk(node, walker, patches);
    }
    patch.REPLACE = REPLACE;
    patch.REORDER = REORDER;
    patch.PROPS = PROPS;
    patch.TEXT = TEXT;

    //深度优先遍历dom结构
    function dfsWalk(node, walker, patches) {
        var currentPatches = patches[walker.index];
        var len = node.childNodes ? node.childNodes.length : 0;
        for (var i = 0; i < len; i++) {
            var child = node.childNodes[i];
            walker.index++;
            dfsWalk(child, walker, patches);
        }
        //如果当前节点存在差异
        if (currentPatches) {
            applyPatches(node, currentPatches);
        }
    }
    function applyPatches(node, currentPatches) {
        //console.log(currentPatches);
        currentPatches.forEach(function(currentPatch) {
            switch (currentPatch.type) {
                case 0:
                    //console.log(currentPatch);
                    var newNode = (typeof currentPatch.node === 'String') ? document.createTextNode(currentPatch.node) : currentPatch.node.render();
                    node.parentNode.replaceChild(newNode, node);
                    break;
                case 1:
                    reoderChildren(node, currentPatch.moves);
                    break;
                case 2:
                    setProps(node, currentPatch.props);
                    break;
                case 3:
                    if (node.textContent) {
                        node.textContent = currentPatch.content;
                    } else {
                        node.nodeValue = currentPatch.content;
                    }
                    break;
                default:
                    throw new Error('Unknow patch type ' + currentPatch.type);
            }
        });
    }
    function toArray(listLike) {
        if (!listLike) {
            return [];
        }
        var list = [];
        for (var i = 0, len = listLike.length; i < len; i++) {
            list.push(listLike[i]);
        }
        return list;
    }
    function reoderChildren(node, moves) {
        var staticNodeList = toArray(node.childNodes);
        var maps = {};
        staticNodeList.forEach(function(node) {
            if (node.nodeType === 1) {
                var key = node.getAttribute('key');
                if (key) {
                    maps[key] = node;
                }
            }
        });

        moves.forEach(function(move) {
            var index = move.index;
            if (move.type === 0) { // 变动类型为删除节点
                if (staticNodeList[index] === node.childNodes[index]) {
                    node.removeChild(node.childNodes[index]);
                }
                staticNodeList.splice(index, 1);
            } else {
                var insertNode = maps[move.item.key]
                    ? maps[move.item.key] : (typeof move.item === 'object')
                    ? move.item.render() : document.createTextNode(move.item);
                staticNodeList.splice(index, 0, insertNode);
                node.insertBefore(insertNode, node.childNodes[index] || null);
            }
        });
    }
    function setProps(node, props) {
        for (var key in props) {
            if (props[key] === void 666) {
                node.removeAttribute(key);
            } else {
                var value = props[key];
                node.setAttribute(key, value);
            }
        }
    }
    return patch;
})