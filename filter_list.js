function filter_list(l) {
    let myList = []
    for (let i = 0; i < l.length; i++) {
        if (!(typeof l[i] === 'string')) {
            if (l[i] >= 0) {
                myList.push(l[i])
            }
        }
    }
    return myList
}