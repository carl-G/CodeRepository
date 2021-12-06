let root = [1,3,2,5,3,null,9]

// 输出 1 3 9

var largestValues = function(root) {
    if (!root || root.length === 0) return null
    let levelCount = 0 // 二叉树层级
    let rootLength = root.length // 数组总数
    let count = 0 
    let returnArr = [] 
    let max
    while (count < rootLength) {

        if (count === 0) {
            max = root[0]
        } else {
           max = 0;
           for (let i = count; i < (count + Math.pow(2, levelCount)); i++) {
            if (root[i]) {
                max = max > root[i] ? max : root[i]
            }
            
           }
        }
        count += Math.pow(2, levelCount)
        returnArr.push(max)
        levelCount ++ 
    }
    return returnArr
};

console.log(largestValues(root))

