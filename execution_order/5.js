updateBlock('result1');
updateBlock('result2');
updateBlock('result3');

function updateBlock(identifier) {
    var theBlock = document.getElementById(identifier);
    if (theBlock == null) {
        // not yet loaded
        return ;
    }
    theBlock.innerHTML = identifier + ' already loaded';
}