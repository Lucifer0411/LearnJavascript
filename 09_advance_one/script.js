const xml=new XMLHttpRequest()
const requestUrl='https://api.github.com/users/Lucifer0411';
xml.open('GET',requestUrl);
xml.onreadystatechange=()=>{
    console.log(xml.readyState)
    if(xml.readyState===4){
        console.log(typeof this.responseText);

        const data=JSON.parse(this.responseText);
        console.log(data.followers)
    }
    // console.log((this.responseText));


    
}
const mgs=xml.send();
