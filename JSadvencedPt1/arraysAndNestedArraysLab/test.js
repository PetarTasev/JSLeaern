   // JavaScript program for unusual string sorting
   const MAX = 26;
 
   // Function for alternate
   // sorting of string
   function alternateSort(s1) {
     var n = s1.length;
     var l = 0, j = 0, k = 0;

     var s = s1.split("");

     // Count occurrences of
     // individual lower case and
     // upper case characters
     var lCount = new Array(MAX).fill(0);
     var uCount = new Array(MAX).fill(0);

     for (var i = 0; i < n; i++) {
       if (s[i] === s[i].toUpperCase())
         uCount[s[i].charCodeAt(0) - "A".charCodeAt(0)]++;
       else
           lCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
     }

     // Traverse through count
     // arrays and one by one
     // pick characters.
     // Below loop takes O(n) time
     // considering the MAX is constant.

     while (k < n) {
       while (l < MAX && uCount[l] === 0)
           l++;

       if (l < MAX) {
         s[k++] = String.fromCharCode("A".charCodeAt(0) + l);
         uCount[l]--;
       }

       while (j < MAX && lCount[j] === 0)
           j++;

       if (j < MAX) {
         s[k++] = String.fromCharCode("a".charCodeAt(0) + j);
         lCount[j]--;
       }
     }

     return s.join("");
   }
