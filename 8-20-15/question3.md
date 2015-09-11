### Is it possible to do an inplace swap in a String in JavaScript? How about an Array? Why?

It is not possible to do an inplace swap in a String with the JavaScript language as it uses immutable strings.  Any solution seeking to reverse a string must allocate new memory for that mutated string, which fails the requirement for "in place".

It is, however, possible to swap an array in place in JavaScript with `Array.prototype.reverse()`.
