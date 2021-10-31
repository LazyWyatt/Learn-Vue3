# v-for 的 Key

# 認識 VNode

- HTML 元素創建出來的 VNode
- VNode 的全稱是 Virtual Dom，也就是虛擬節點
- 無論是組件還元素，最終在 Vue 上都是一個個 Node
- VNode 本質上是一個 JavaScript 的對象
  template -> VNode -> 真實的 DOM
  template -> ast 語法樹 -> render -> 虛擬 dom -> 真實 dom

# 虛擬 DOM

- 如果只是一個簡單的 div，而是會有一大堆元素，會形成一個 VNode Tree

VNode 是一個節點
vDom(Virtual DOM)是多個 Node 形成的樹結構

> 我們寫的標籤，瀏覽器解釋不了，需要經過 Vue 轉換成瀏覽器解析的了的。

# diff 算法 (虛擬 DOM 的 differences 算法)

新增元素的算法 01.全部刪掉，重新生成一個 DOM 02.前面相同的值不替換，將元素取代成新的元素，之後的元素都重新賦值
03.diff 算法，直接插入到指定位置

- Vue 如何操作的?
  Vue 針對有 key 跟沒 key 會掉用不同的方法
  有 key，就使用 patchKeyedChildren 方法
  沒有 key，就使用 patchUnKeyChildren 方法

- 沒有 Key 的算法如下 (patchUnKeyChildren)

1.  先比較兩個新陣列，取就陣列的最小值
2.  使用 for 迴圈，一個元素一個元素進行檢查，沒有更改就跳下一個，有更改的就 patch
3.  舊元素遍歷完跳出迴圈，執行下一個判斷式，如果舊的陣列長度>新陣列的長度調用 unmountChildren，
    反之，則使用 mountChildren 把新元素掛載上去

////////////
// patchUnkeyedChildren c1 舊元素 c2 新元素

1. 獲取舊節點長度
2. 獲取新節點長度
3. 取最小的那個長度
4. 從 0 開始依序 patch 比較
5. 如果舊節點數大於新的節點數 mountChildren，反之 unmountChildren
   ///////////

- 有 key 的算法如下(patchKeyedChildren, n-> VNode, n1 舊 VNode, n2 新 VNode)

1.  使用 while 循環，isSameVNodeType 檢查類型是否相同，不同的話馬上 break
2.  檢查 n1.type === n2.type 以及 n1.key === n2.key 檢查 key 名稱一不一樣後檢查 type 是否一樣
3.  使用 while 循環，直接從尾部開始取，isSameVNodeType 檢查類型是否相同，最後一個是否相同，同樣的話就往前一個繼續比對
4.  當 key 不一樣的時候，就 break 跳出循環
5.  掛載這個新節點的位置在剛剛檢查位置前新增元素，這裡的 patch 第一個傳入的 null，代表掛載一個新元素。
6.  但當舊節點比較多的時候，就執行 unmount
7.  如果是 unknown sequence，中間的排序是混亂的話，會想辦法找出跟新節點一樣的舊節點，放到對應的位置。

patch ->如果有 n1,那麼進行更新操作
patch ->如果有 null,那麼進行掛載操作

///////////////
patchKeyedChildren ,n1 舊節點, n2 新節點。e1 舊節點索引(舊節點長度-1), e2 新節點索引(新節點長度-1)

1. 從頭開始遍歷，透過 isSameVNodeType(n1, n2)比對，遇到相同的節點就繼續，遇到不同的就跳出循環
2. 從頭開始遍歷，透過 isSameVNodeType(n1, n2)比對，遇到相同的節點就繼續，遇到不同的就跳出循環
3. 如果最後新節點更多，則增加新節點
4. 如果最後舊節點更多，則刪除舊節點
5. 如果存在著不知道如何排列的位置排序，那麼就使用 key 建立索引最大限度的使用舊節點
   ///////////////
