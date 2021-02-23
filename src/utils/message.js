const genmsg = (username,text) =>{
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const genLocationmsg = (username,url) =>{
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}
module.exports = {
    genLocationmsg,
    genmsg
}