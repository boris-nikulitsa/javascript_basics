var theBlock, i;
for (i=1; i<=12; ++i) {
    theBlock = document.getElementById('result' + i);
    if (theBlock != null) {
        theBlock.innerHTML += ' (second async script)';
    }
}