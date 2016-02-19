(function () {
    'use strict';

    angular.module('fqueue', [])
        .factory('FixedQueue', function () {

            function FixedQueue(size, initialValues ) {
                initialValues = (initialValues || []);

                // Create the fixed queue array value.
                var queue = Array.apply(null, initialValues);

                // Store the fixed size in the queue.
                queue.fixedSize = size;

                // Add the class methods to the queue. Some of these have
                // to override the native Array methods in order to make
                // sure the queue length is maintained.
                queue.push = FixedQueue.push;
                queue.splice = FixedQueue.splice;
                queue.unshift = FixedQueue.unshift;

                // Trim any initial excess from the queue.
                FixedQueue.trimTail.call(queue);

                // Return the new queue.
                return queue;
            }

            // Trims the queue down to the appropriate size, removing
            // items from the beginning of the internal array.
            FixedQueue.trimHead = function() {
                if (this.length <= this.fixedSize) {
                    return;
                }
                Array.prototype.splice.call(this, 0, (this.length - this.fixedSize));
            };

            // Trims the queue down to the appropriate size, removing
            // items from the end of the internal array.
            FixedQueue.trimTail = function() {
                if (this.length <= this.fixedSize){
                    return;
                }
                Array.prototype.splice.call(this, this.fixedSize, (this.length - this.fixedSize));
            };

            // Calls the native Array methods followed by a trimming method.
            FixedQueue.wrapMethod = function(methodName, trimMethod) {
                // Create a wrapper that calls the given method.
                var wrapper = function() {
                    // Get the native Array method.
                    var method = Array.prototype[methodName];
                    // Call the native method first.
                    var result = method.apply(this, arguments);
                    // Trim the queue now that it's been augmented.
                    trimMethod.call(this);
                    // Return the original value.
                    return result;
                };
                // Return the wrapper method.
                return wrapper;
            };

            FixedQueue.push = FixedQueue.wrapMethod("push", FixedQueue.trimHead);
            FixedQueue.splice =  FixedQueue.wrapMethod("splice", FixedQueue.trimTail);
            FixedQueue.unshift = FixedQueue.wrapMethod('unshift', FixedQueue.trimTail);

            /* return the constructor function */
            return FixedQueue;
        });
})();
