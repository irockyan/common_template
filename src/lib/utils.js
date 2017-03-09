/**
 * 获取格式话的时间
 * @param {*时间戳} timeStamp 
 * @param {*连接符号} flag
 */
export const getFormateDate = (timeStamp,flag) => {
    const date = new Date(timeStamp);
    let year = date.getFullYear(),
        month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1)  : date.getMonth(),
        day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return year + ('年' || flag) + month + ('月' || flag) + day + ('日' || flag);
}



export const getRandom = (startNum, endNum) => {
        var iChoice = endNum - startNum;
        return Math.floor(Math.random() * iChoice + startNum);
}
console.log(getFormateDate(Date.now()));