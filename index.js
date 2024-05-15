let cd = document.getElementById('cd')
let code=document.getElementById('code')
let va = document.getElementById('va')
let ts = document.getElementById('ts')
let ga = document.getElementById('ga')
let tkfe = document.getElementById('tkfe')
let eads = document.getElementById('eads')
let poaei = document.getElementById('poaei')
let vs = document.getElementById('vs')
let lcs = document.getElementById('lcs')
cd.addEventListener("click", function() {
    code.innerHTML=`
    Contains Duplicate <br>
    <br>
    <codekey>class</codekey> Solution(object):<br>
    &emsp;<codekey>def</codekey> containsDuplicate(self, nums):<br>
    &emsp;&emsp;hashset = <codekey>set</codekey>()<br>
    &emsp;&emsp;<codekey>for</codekey> i <codekey>in</codekey> nums:<br>
    &emsp;&emsp;&emsp;<codekey>if</codekey> i <codekey>in</codekey> hashset:<br>
    &emsp;&emsp;&emsp;&emsp;<codekey>return</codekey> True<br>
    &emsp;&emsp;&emsp;hashset.add(i)<br>
    &emsp;&emsp;<codekey>return</codekey> False<br>
        `
})
va.addEventListener("click", function() {
    code.innerHTML=`
    Valid Anagram<br>
    <br>
    <codekey>class</codekey> Solution(object):<br>
    &emsp;<codekey>def</codekey> isAnagram(self, s, t):<br>
    &emsp;&emsp;    <codekey>if</codekey> len(s)!=len(t):<br>
    &emsp;&emsp;&emsp;        <codekey>return</codekey> False<br>
    &emsp;&emsp;    sdic, tdic = {}, {}<br>
    &emsp;&emsp;    <codekey>for</codekey> i <codekey>in</codekey> range(len(s)):<br>
    &emsp;&emsp;&emsp;        sdic[s[i]]= 1 + sdic.get(s[i],0)<br>
    &emsp;&emsp;&emsp;        tdic[t[i]] = 1+tdic.get(t[i],0)<br>
    &emsp;&emsp;    <codekey>for</codekey> i <codekey>in</codekey> sdic:<br>
    &emsp;&emsp;&emsp;        <codekey>if</codekey> sdic[i] != tdic.get(i,0):<br>
    &emsp;&emsp;&emsp;&emsp;            <codekey>return</codekey> False<br>
    &emsp;&emsp;    <codekey>return</codekey> True<br>
    `
})
ts.addEventListener("click", function() {
    code.innerHTML=`
    Two Sum<br>
    <br>
    <codekey>class</codekey> Solution(object):<br>
    &emsp;<codekey>def</codekey> twoSum(self, nums, target):<br>
    &emsp;&emsp;    hashmap = {}<br>
    &emsp;&emsp;    <codekey>for</codekey> i <codekey>in</codekey> range(len(nums)):<br>
    &emsp;&emsp;&emsp;        diff=target-nums[i]<br>
    &emsp;&emsp;&emsp;        <codekey>if</codekey> diff <codekey>in</codekey> hashmap:<br>
    &emsp;&emsp;&emsp;&emsp;            <codekey>return</codekey> [hashmap[diff],i]<br>
    &emsp;&emsp;&emsp;        hashmap[nums[i]]=i<br>
    `
})
ga.addEventListener("click", function() {
    code.innerHTML=`
    Group Anagrams<br>
    <br>
    <codekey>class</codekey> Solution(object):<br>
    &emsp;<codekey>def</codekey> groupAnagrams(self, strs):<br>
    &emsp;&emsp;res = defaultdict(<codekey>list</codekey>)<br>
    &emsp;&emsp;<codekey>for</codekey> i <codekey>in</codekey> strs:<br>
    &emsp;&emsp;&emsp;count = [0]*26<br>
    &emsp;&emsp;&emsp;<codekey>for</codekey> j <codekey>in</codekey> i:<br>
    &emsp;&emsp;&emsp;&emsp;count[ord(j)-ord("a")]+=1<br>
    &emsp;&emsp;&emsp;res[<codekey>tuple</codekey>(count)].append(i)<br>
    &emsp;&emsp;<codekey>return</codekey> res.values()<br>
    `
})
tkfe.addEventListener("click", function() {
    code.innerHTML=`
    Top K Frequent Elements<br>
    <br>
    <codekey>class</codekey> Solution(object):<br>
    &emsp;<codekey>def</codekey> topKFrequent(self, nums, k):<br>
    &emsp;&emsp;count = {}<br>
    &emsp;&emsp;freq = [[] <codekey>for</codekey> i <codekey>in</codekey> range(len(nums)+1)]<br>
    &emsp;&emsp;<codekey>for</codekey> i <codekey>in</codekey> nums:<br>
    &emsp;&emsp;&emsp;count[i] = 1+count.get(i,0)<br>
    &emsp;&emsp;<codekey>for</codekey> i <codekey>in</codekey> count:<br>
    &emsp;&emsp;&emsp;freq[count[i]].append(i)<br>
    &emsp;&emsp;res=[]<br>
    &emsp;&emsp;<codekey>for</codekey> i <codekey>in</codekey> range(len(freq)-1,0,-1):<br>
    &emsp;&emsp;&emsp;<codekey>for</codekey> j <codekey>in</codekey> freq[i]:<br>
    &emsp;&emsp;&emsp;&emsp;res.append(j)<br>
    &emsp;&emsp;&emsp;&emsp;<codekey>if</codekey> len(res)==k:<br>
    &emsp;&emsp;&emsp;&emsp;&emsp;<codekey>return</codekey> res<br>
    `
})
eads.addEventListener("click", function() {
    code.innerText="encode and decode strings will be updated soon"
})
poaei.addEventListener("click", function() {
    code.innerText="product of array except itself will be updated soon"
})
vs.addEventListener("click", function() {
    code.innerText="valid sudoku will be updated soon"
})
lcs.addEventListener("click", function() {
    code.innerText="longest consecutive sequence will be updated soon"
})