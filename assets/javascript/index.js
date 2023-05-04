function giveIdToDeleteBtn(id, checkBox, descriptionId, dateID)
{
    let descriptionPara = document.getElementById(descriptionId);
    let datePara = document.getElementById(dateID);
    
    if(checkBox.checked)
    {
        descriptionPara.style.textDecoration="line-through";
        datePara.style.textDecoration="line-through";
        document.getElementById('delete-anchor').href=`/delete-task/?id=${id}`;
    }
    else
    {
        descriptionPara.style.textDecoration="none";
        datePara.style.textDecoration="none";
        document.getElementById('delete-anchor').href=`/delete-task/?id`;
    }
}            