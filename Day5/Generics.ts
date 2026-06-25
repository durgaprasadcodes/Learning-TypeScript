function getArray<T>(a: Array<T>): Array<T> {
    return a
}

getArray(['A', 'B', 'C', 'D'])
getArray([1, 2, 3, , 4])

function getFirst<T>(nums: Array<T>): T | undefined {
    return nums[0]
}

getFirst([1, 2, 3, 4, 5])
getFirst(['Ambassodor', 'Rolex', 'BWM'])