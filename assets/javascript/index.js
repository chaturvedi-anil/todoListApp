function giveIdToDeleteBtn(id, checkBox)
{
    let descriptionPara = document.getElementById('description-para');
    let datePara = document.getElementById('date-para');
    if(checkBox.checked)
    {
        descriptionPara.style.textDecoration="line-through";
        datePara.style.textDecoration="line-through";
        const deleteButton=document.getElementById('delete-anchor').href=`/delete-task/?id=${id}`;
    }
    else
    {
        descriptionPara.style.textDecoration="none";
        datePara.style.textDecoration="none";
    }
}            