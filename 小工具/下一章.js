auto();

var window = floaty.window(
    <frame>
        <button id="action" text="下一章" w="70" h="40" bg="#FF338AD1"/>
    </frame>
);
window.exitOnClose();
window.setPosition(500, 1200);

window.action.click(()=>{
    click("下一章")
});

window.action.longClick(()=>{
   window.setAdjustEnabled(!window.isAdjustEnabled());
   return true;
});

setInterval(()=>{}, 1000);