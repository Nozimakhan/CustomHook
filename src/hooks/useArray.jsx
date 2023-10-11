const useArray = (arr) => {
    return (
        arr.reverse()
    )
    
}

const useArray1 = (arr) => {
    return arr.indexOf(1)
}


const useArray2 = (arr) => {
    return arr.map(n => n**3);
}

const useArray3 = (arr) => {
    return arr.sort((a, b) => b-a).reverse()
}

const useArray4 = (arr) => {
    return Math.max(...arr)
}

export {useArray, useArray1, useArray2, useArray3, useArray4}