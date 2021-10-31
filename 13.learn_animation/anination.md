# Animation
1. 是否應用css過渡動畫，再洽當時機添加.刪除CSS類名
2. 如果transition組件提供了Javascript 鉤子函數，這些鉤子函數在恰當時機被調用。
3. 如果沒有找到Javascript鉤子而且也沒有檢測到CSS過渡/動畫，DOM插入、刪除會立即執行。

v-enter-from 定義動畫進入階段結束的狀態，在插入DOM之前加上去，插入DOM的下一鏡頭禎數馬上移除
v-enter-active  定義動畫進入階段時的狀態，在元素插入前生效，在轉場/動畫之後移除，可定義動畫長度、延遲、曲線等。
v-enter-to 定義動畫進入階段結束的狀態，在元素插入後下一禎生效，在動畫完成後移除。

v-leave-from: 定義動畫開始的狀態
v-leave-active: 定義動畫離開階段時的狀態 
v-leave-to: 定義動畫離開階段結束的狀態

transition 和 Animation 混用的時候，Vue會根據type來決定是監聽transitionend事件
還是animationend