export const ParseDate= (date)=>{
    const fixdate=`${date}`
    const newdate= fixdate.slice(0,10)
    const dateArr= newdate.split('-')
    const orderedDateArr= dateArr.reverse()
    const orderedDate= orderedDateArr.join('-')
    return orderedDate
}