/**
 * 获取格式话的时间
 * @param {*时间戳} timeStamp 
 */
export const getFormateDate = (timeStamp) => {
    const date = new Date(timeStamp);
    let year = date.getFullYear(),
        month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1)  : date.getMonth(),
        day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return year + '-' + month + '-' + day;
}



export const getRandom = (startNum, endNum) => {
        var iChoice = endNum - startNum;
        return Math.floor(Math.random() * iChoice + startNum);
}
console.log(getFormateDate(Date.now()));