function optionfruit(select){
    let a = select.selectedIndex;
    let fav = select.options[a].value;
    if(a==0){
        alert("Please select a fruit");
    }
    else {
        document.write("Your favorite fruit is <b>"+fav+".</b>");
    }
}