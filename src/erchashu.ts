const FLOWER = '✿';
const arr = '0123✿✿✿4✿✿56✿✿✿'.split('');
let i = 0; // 二叉树节点字符数组遍历索引
let l = 0; // 树的深度索引
let printArr = []; // 二维数组，缓存每层的节点字符数据
// 节点
function Node1() {
    this.data = FLOWER;
    this.leftChild = null;
    this.rightChild = null;
}
// 生成二叉树
// @params {Node} node 节点
// @params {number} layer 当前树层度
// @params {Node} parent 父节点
function createBiTree(node, layer, parent) {
    if (!printArr[layer]) {
        printArr[layer] = [];
    }
    if (arr[i] === FLOWER) {
        printArr[layer].push(`${node.data}(${parent ? parent.data : 'null'})`);
        return;
    } else {
        node.data = arr[i];
        printArr[layer].push(`${node.data}(${parent ? parent.data : 'null'})`);
        node.leftChild = new Node1();
        i++;
        createBiTree(node.leftChild, ++layer, node);
        node.rightChild = new Node1();
        i++;
        createBiTree(node.rightChild, layer, node);
    }
}
var bt = new Node1();
createBiTree(bt, l, null);

// console.log(bt);
console.log(printArr);