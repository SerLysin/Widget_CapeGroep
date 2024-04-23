'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.widget-chatbottesttwo-clickable {\n    cursor: pointer;\n}\n\n.widget-chatbottesttwo {\n    display: inline-block;\n}\n\n.widget-chatbottesttwo.badge:empty {\n    display: initial;\n    /* Fix padding to stay round */\n    padding: 3px 10px;\n}\n\n.widget-chatbottesttwo.label:empty {\n    display: initial;\n    /* Fix padding to stay square */\n    padding: .2em .8em .3em;\n}\n\n.widget-chatbottesttwo.badge {\n    min-width: 18px;\n    min-height: 18px;\n}\n\n.chat-toggle {\n    position: fixed;\n    bottom: 20px; /* Adjust as needed */\n    right: 20px; /* Adjust as needed */\n    width: 60px; /* Size of the button */\n    height: 60px; /* Size of the button */\n    border-radius: 50%; /* Make it round */\n    background-color: #0078d4; /* Example color; adjust as needed */\n    color: white; /* Icon color */\n    font-size: 30px; /* Adjust as needed */\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    cursor: pointer;\n    z-index: 1000; /* Ensure it is above other content */\n}\n\n.chatbot-widget {\n    display: none; /* Hide by default */\n}\n\n/* chatbot-widget styling */\n\n.chatbot-widget.open {\n    display: flex; \n    position: fixed;\n    bottom: 5vh; /* 5% of the viewport height from the bottom */\n    right: 5vw; /* 5% of the viewport width from the right */\n    width: 10vw; /* 10% of the viewport width */\n    max-width: 350px; /* Maximum width to prevent it from becoming too large on wide screens */\n    height: 50vh; /* 50% of the viewport height */\n    max-height: 600px; /* Maximum height to prevent it from becoming too large on tall screens */\n    min-height: 300px; /* Minimum height to ensure visibility of content */\n    min-width: 300px; /* Minimum width to ensure visibility of content */\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    overflow: hidden;\n    background-color: #f9f9f9;\n    font-family: 'Roboto', Arial, sans-serif;\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    display: flex;\n    flex-direction: column;\n    z-index: 1000; /* Ensures the chat widget stays on top of other content */\n}\n\n/* Header styling */\n\n.chat-header {\n    background-color: #0078d4;\n    color: #ffffff;\n    padding: 10px;\n    text-align: center;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    font-size: 1.2em;\n    font-weight: bold;\n    position: relative; /* Set the header to relative to position children absolutely within it */\n}\n\n.collapse-button {\n    position: absolute;\n    top: 10px;\n    right: 10px; /* Position to the top-right corner of the chat-header */\n    background-color: #0078d4; /* Match the header background color */\n    border: none;\n    border-radius: 50%;\n    padding: 0 6px; /* A little padding to make it more clickable */\n    color: white;\n    cursor: pointer;\n    font-size: 20px; /* Size of the button */\n    line-height: 20px; /* Align the symbol vertically */\n    height: 20px; /* Define a fixed height */\n    width: 20px; /* Define a fixed width */\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: none; /* Removes the outline to keep the design clean */\n}\n\n.collapse-button::before {\n    content: \"\\2212\"; /* Unicode for the minus sign */\n    display: block;\n}\n\n.chat-body {\n    flex-grow: 1; /* Allows the chat body to fill the space */\n    overflow-y: auto;\n    padding: 10px;\n    background-color: #fff;\n    scroll-behavior: smooth;\n}\n\n/* Input field styling */\n\n.user-input {\n    border: none;\n    padding: 10px;\n    width: calc(100% - 20px); /* Calculate width based on the parent width */\n    box-sizing: border-box;\n    border-top: 2px solid #0078d4;\n    outline: none;\n    font-size: 1em;\n}\n\n/* Message bubble styling */\n\n.chat-message {\n    max-width: 70%;\n    margin: 10px;\n    padding: 10px;\n    border-radius: 20px;\n    color: #ffffff;\n    word-wrap:break-word;\n    font-size: 1em; /* Increased font size */\n    line-height: 1.4;\n}\n\n/* User message styling */\n\n.user-message {\n    background-color: #4e8cff;\n    margin-left: auto;\n    margin-right: 0;\n    text-align: right; /* Aligns text to the right */\n    word-wrap:break-word;\n}\n\n/* System message styling */\n\n.system-message {\n    background-color: #dddddd;\n    color: #333333;\n    margin-left: 0;\n    margin-right: auto;\n    text-align: left; /* Aligns text to the left */\n    word-wrap:break-word;\n}\n\n/* Bot message styling */\n\n.bot-message {\n    background-color: #dddddd;\n    color: #333333;\n    margin-left: 0;\n    margin-right: auto;\n}\n\n/* Clear floats */\n\n.clear-float {\n    clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUUsNkJBQTZCO0lBQ2hELG9CQUFvQjtBQUN4Qjs7QUFFQSwyQkFBMkI7O0FBQzNCO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDRCQUE0QjtJQUM5QyxvQkFBb0I7QUFDeEI7O0FBR0Esd0JBQXdCOztBQUN4QjtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6IlRlc3QuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud2lkZ2V0LWNoYXRib3R0ZXN0dHdvLWNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lkZ2V0LWNoYXRib3R0ZXN0dHdvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi53aWRnZXQtY2hhdGJvdHRlc3R0d28uYmFkZ2U6ZW1wdHkge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgLyogRml4IHBhZGRpbmcgdG8gc3RheSByb3VuZCAqL1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xufVxuXG4ud2lkZ2V0LWNoYXRib3R0ZXN0dHdvLmxhYmVsOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIC8qIEZpeCBwYWRkaW5nIHRvIHN0YXkgc3F1YXJlICovXG4gICAgcGFkZGluZzogLjJlbSAuOGVtIC4zZW07XG59XG5cbi53aWRnZXQtY2hhdGJvdHRlc3R0d28uYmFkZ2Uge1xuICAgIG1pbi13aWR0aDogMThweDtcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xufVxuXG4uY2hhdC10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICByaWdodDogMjBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICAgIHdpZHRoOiA2MHB4OyAvKiBTaXplIG9mIHRoZSBidXR0b24gKi9cbiAgICBoZWlnaHQ6IDYwcHg7IC8qIFNpemUgb2YgdGhlIGJ1dHRvbiAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZSBpdCByb3VuZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4ZDQ7IC8qIEV4YW1wbGUgY29sb3I7IGFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBjb2xvcjogd2hpdGU7IC8qIEljb24gY29sb3IgKi9cbiAgICBmb250LXNpemU6IDMwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCBpcyBhYm92ZSBvdGhlciBjb250ZW50ICovXG59XG4uY2hhdGJvdC13aWRnZXQge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgYnkgZGVmYXVsdCAqL1xufVxuXG4vKiBjaGF0Ym90LXdpZGdldCBzdHlsaW5nICovXG4uY2hhdGJvdC13aWRnZXQub3BlbiB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNXZoOyAvKiA1JSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0IGZyb20gdGhlIGJvdHRvbSAqL1xuICAgIHJpZ2h0OiA1dnc7IC8qIDUlIG9mIHRoZSB2aWV3cG9ydCB3aWR0aCBmcm9tIHRoZSByaWdodCAqL1xuICAgIHdpZHRoOiAxMHZ3OyAvKiAxMCUgb2YgdGhlIHZpZXdwb3J0IHdpZHRoICovXG4gICAgbWF4LXdpZHRoOiAzNTBweDsgLyogTWF4aW11bSB3aWR0aCB0byBwcmV2ZW50IGl0IGZyb20gYmVjb21pbmcgdG9vIGxhcmdlIG9uIHdpZGUgc2NyZWVucyAqL1xuICAgIGhlaWdodDogNTB2aDsgLyogNTAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQgKi9cbiAgICBtYXgtaGVpZ2h0OiA2MDBweDsgLyogTWF4aW11bSBoZWlnaHQgdG8gcHJldmVudCBpdCBmcm9tIGJlY29taW5nIHRvbyBsYXJnZSBvbiB0YWxsIHNjcmVlbnMgKi9cbiAgICBtaW4taGVpZ2h0OiAzMDBweDsgLyogTWluaW11bSBoZWlnaHQgdG8gZW5zdXJlIHZpc2liaWxpdHkgb2YgY29udGVudCAqL1xuICAgIG1pbi13aWR0aDogMzAwcHg7IC8qIE1pbmltdW0gd2lkdGggdG8gZW5zdXJlIHZpc2liaWxpdHkgb2YgY29udGVudCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZXMgdGhlIGNoYXQgd2lkZ2V0IHN0YXlzIG9uIHRvcCBvZiBvdGhlciBjb250ZW50ICovXG59XG5cbi8qIEhlYWRlciBzdHlsaW5nICovXG4uY2hhdC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4ZDQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFNldCB0aGUgaGVhZGVyIHRvIHJlbGF0aXZlIHRvIHBvc2l0aW9uIGNoaWxkcmVuIGFic29sdXRlbHkgd2l0aGluIGl0ICovXG59XG5cbi5jb2xsYXBzZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7IC8qIFBvc2l0aW9uIHRvIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIHRoZSBjaGF0LWhlYWRlciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4ZDQ7IC8qIE1hdGNoIHRoZSBoZWFkZXIgYmFja2dyb3VuZCBjb2xvciAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMCA2cHg7IC8qIEEgbGl0dGxlIHBhZGRpbmcgdG8gbWFrZSBpdCBtb3JlIGNsaWNrYWJsZSAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4OyAvKiBTaXplIG9mIHRoZSBidXR0b24gKi9cbiAgICBsaW5lLWhlaWdodDogMjBweDsgLyogQWxpZ24gdGhlIHN5bWJvbCB2ZXJ0aWNhbGx5ICovXG4gICAgaGVpZ2h0OiAyMHB4OyAvKiBEZWZpbmUgYSBmaXhlZCBoZWlnaHQgKi9cbiAgICB3aWR0aDogMjBweDsgLyogRGVmaW5lIGEgZml4ZWQgd2lkdGggKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZXMgdGhlIG91dGxpbmUgdG8ga2VlcCB0aGUgZGVzaWduIGNsZWFuICovXG59XG5cbi5jb2xsYXBzZS1idXR0b246OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIyMTJcIjsgLyogVW5pY29kZSBmb3IgdGhlIG1pbnVzIHNpZ24gKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoYXQtYm9keSB7XG4gICAgZmxleC1ncm93OiAxOyAvKiBBbGxvd3MgdGhlIGNoYXQgYm9keSB0byBmaWxsIHRoZSBzcGFjZSAqL1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5cblxuLyogSW5wdXQgZmllbGQgc3R5bGluZyAqL1xuLnVzZXItaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTsgLyogQ2FsY3VsYXRlIHdpZHRoIGJhc2VkIG9uIHRoZSBwYXJlbnQgd2lkdGggKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDA3OGQ0O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cblxuXG4vKiBNZXNzYWdlIGJ1YmJsZSBzdHlsaW5nICovXG4uY2hhdC1tZXNzYWdlIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiBJbmNyZWFzZWQgZm9udCBzaXplICovXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuXG4vKiBVc2VyIG1lc3NhZ2Ugc3R5bGluZyAqL1xuLnVzZXItbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlOGNmZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IC8qIEFsaWducyB0ZXh0IHRvIHRoZSByaWdodCAqL1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xufVxuXG4vKiBTeXN0ZW0gbWVzc2FnZSBzdHlsaW5nICovXG4uc3lzdGVtLW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IC8qIEFsaWducyB0ZXh0IHRvIHRoZSBsZWZ0ICovXG4gICAgd29yZC13cmFwOmJyZWFrLXdvcmQ7XG59XG5cblxuLyogQm90IG1lc3NhZ2Ugc3R5bGluZyAqL1xuLmJvdC1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLyogQ2xlYXIgZmxvYXRzICovXG4uY2xlYXItZmxvYXQge1xuICAgIGNsZWFyOiBib3RoO1xufVxuIl19 */";
var stylesheet="\n.widget-chatbottesttwo-clickable {\n    cursor: pointer;\n}\n\n.widget-chatbottesttwo {\n    display: inline-block;\n}\n\n.widget-chatbottesttwo.badge:empty {\n    display: initial;\n    /* Fix padding to stay round */\n    padding: 3px 10px;\n}\n\n.widget-chatbottesttwo.label:empty {\n    display: initial;\n    /* Fix padding to stay square */\n    padding: .2em .8em .3em;\n}\n\n.widget-chatbottesttwo.badge {\n    min-width: 18px;\n    min-height: 18px;\n}\n\n.chat-toggle {\n    position: fixed;\n    bottom: 20px; /* Adjust as needed */\n    right: 20px; /* Adjust as needed */\n    width: 60px; /* Size of the button */\n    height: 60px; /* Size of the button */\n    border-radius: 50%; /* Make it round */\n    background-color: #0078d4; /* Example color; adjust as needed */\n    color: white; /* Icon color */\n    font-size: 30px; /* Adjust as needed */\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    cursor: pointer;\n    z-index: 1000; /* Ensure it is above other content */\n}\n\n.chatbot-widget {\n    display: none; /* Hide by default */\n}\n\n/* chatbot-widget styling */\n\n.chatbot-widget.open {\n    display: flex; \n    position: fixed;\n    bottom: 5vh; /* 5% of the viewport height from the bottom */\n    right: 5vw; /* 5% of the viewport width from the right */\n    width: 10vw; /* 10% of the viewport width */\n    max-width: 350px; /* Maximum width to prevent it from becoming too large on wide screens */\n    height: 50vh; /* 50% of the viewport height */\n    max-height: 600px; /* Maximum height to prevent it from becoming too large on tall screens */\n    min-height: 300px; /* Minimum height to ensure visibility of content */\n    min-width: 300px; /* Minimum width to ensure visibility of content */\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    overflow: hidden;\n    background-color: #f9f9f9;\n    font-family: 'Roboto', Arial, sans-serif;\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    display: flex;\n    flex-direction: column;\n    z-index: 1000; /* Ensures the chat widget stays on top of other content */\n}\n\n/* Header styling */\n\n.chat-header {\n    background-color: #0078d4;\n    color: #ffffff;\n    padding: 10px;\n    text-align: center;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    font-size: 1.2em;\n    font-weight: bold;\n    position: relative; /* Set the header to relative to position children absolutely within it */\n}\n\n.collapse-button {\n    position: absolute;\n    top: 10px;\n    right: 10px; /* Position to the top-right corner of the chat-header */\n    background-color: #0078d4; /* Match the header background color */\n    border: none;\n    border-radius: 50%;\n    padding: 0 6px; /* A little padding to make it more clickable */\n    color: white;\n    cursor: pointer;\n    font-size: 20px; /* Size of the button */\n    line-height: 20px; /* Align the symbol vertically */\n    height: 20px; /* Define a fixed height */\n    width: 20px; /* Define a fixed width */\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: none; /* Removes the outline to keep the design clean */\n}\n\n.collapse-button::before {\n    content: \"\\2212\"; /* Unicode for the minus sign */\n    display: block;\n}\n\n.chat-body {\n    flex-grow: 1; /* Allows the chat body to fill the space */\n    overflow-y: auto;\n    padding: 10px;\n    background-color: #fff;\n    scroll-behavior: smooth;\n}\n\n/* Input field styling */\n\n.user-input {\n    border: none;\n    padding: 10px;\n    width: calc(100% - 20px); /* Calculate width based on the parent width */\n    box-sizing: border-box;\n    border-top: 2px solid #0078d4;\n    outline: none;\n    font-size: 1em;\n}\n\n/* Message bubble styling */\n\n.chat-message {\n    max-width: 70%;\n    margin: 10px;\n    padding: 10px;\n    border-radius: 20px;\n    color: #ffffff;\n    word-wrap:break-word;\n    font-size: 1em; /* Increased font size */\n    line-height: 1.4;\n}\n\n/* User message styling */\n\n.user-message {\n    background-color: #4e8cff;\n    margin-left: auto;\n    margin-right: 0;\n    text-align: right; /* Aligns text to the right */\n    word-wrap:break-word;\n}\n\n/* System message styling */\n\n.system-message {\n    background-color: #dddddd;\n    color: #333333;\n    margin-left: 0;\n    margin-right: auto;\n    text-align: left; /* Aligns text to the left */\n    word-wrap:break-word;\n}\n\n/* Bot message styling */\n\n.bot-message {\n    background-color: #dddddd;\n    color: #333333;\n    margin-left: 0;\n    margin-right: auto;\n}\n\n/* Clear floats */\n\n.clear-float {\n    clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUUsNkJBQTZCO0lBQ2hELG9CQUFvQjtBQUN4Qjs7QUFFQSwyQkFBMkI7O0FBQzNCO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDRCQUE0QjtJQUM5QyxvQkFBb0I7QUFDeEI7O0FBR0Esd0JBQXdCOztBQUN4QjtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6IlRlc3QuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud2lkZ2V0LWNoYXRib3R0ZXN0dHdvLWNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lkZ2V0LWNoYXRib3R0ZXN0dHdvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi53aWRnZXQtY2hhdGJvdHRlc3R0d28uYmFkZ2U6ZW1wdHkge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgLyogRml4IHBhZGRpbmcgdG8gc3RheSByb3VuZCAqL1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xufVxuXG4ud2lkZ2V0LWNoYXRib3R0ZXN0dHdvLmxhYmVsOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIC8qIEZpeCBwYWRkaW5nIHRvIHN0YXkgc3F1YXJlICovXG4gICAgcGFkZGluZzogLjJlbSAuOGVtIC4zZW07XG59XG5cbi53aWRnZXQtY2hhdGJvdHRlc3R0d28uYmFkZ2Uge1xuICAgIG1pbi13aWR0aDogMThweDtcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xufVxuXG4uY2hhdC10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICByaWdodDogMjBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICAgIHdpZHRoOiA2MHB4OyAvKiBTaXplIG9mIHRoZSBidXR0b24gKi9cbiAgICBoZWlnaHQ6IDYwcHg7IC8qIFNpemUgb2YgdGhlIGJ1dHRvbiAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZSBpdCByb3VuZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4ZDQ7IC8qIEV4YW1wbGUgY29sb3I7IGFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBjb2xvcjogd2hpdGU7IC8qIEljb24gY29sb3IgKi9cbiAgICBmb250LXNpemU6IDMwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCBpcyBhYm92ZSBvdGhlciBjb250ZW50ICovXG59XG4uY2hhdGJvdC13aWRnZXQge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgYnkgZGVmYXVsdCAqL1xufVxuXG4vKiBjaGF0Ym90LXdpZGdldCBzdHlsaW5nICovXG4uY2hhdGJvdC13aWRnZXQub3BlbiB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNXZoOyAvKiA1JSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0IGZyb20gdGhlIGJvdHRvbSAqL1xuICAgIHJpZ2h0OiA1dnc7IC8qIDUlIG9mIHRoZSB2aWV3cG9ydCB3aWR0aCBmcm9tIHRoZSByaWdodCAqL1xuICAgIHdpZHRoOiAxMHZ3OyAvKiAxMCUgb2YgdGhlIHZpZXdwb3J0IHdpZHRoICovXG4gICAgbWF4LXdpZHRoOiAzNTBweDsgLyogTWF4aW11bSB3aWR0aCB0byBwcmV2ZW50IGl0IGZyb20gYmVjb21pbmcgdG9vIGxhcmdlIG9uIHdpZGUgc2NyZWVucyAqL1xuICAgIGhlaWdodDogNTB2aDsgLyogNTAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQgKi9cbiAgICBtYXgtaGVpZ2h0OiA2MDBweDsgLyogTWF4aW11bSBoZWlnaHQgdG8gcHJldmVudCBpdCBmcm9tIGJlY29taW5nIHRvbyBsYXJnZSBvbiB0YWxsIHNjcmVlbnMgKi9cbiAgICBtaW4taGVpZ2h0OiAzMDBweDsgLyogTWluaW11bSBoZWlnaHQgdG8gZW5zdXJlIHZpc2liaWxpdHkgb2YgY29udGVudCAqL1xuICAgIG1pbi13aWR0aDogMzAwcHg7IC8qIE1pbmltdW0gd2lkdGggdG8gZW5zdXJlIHZpc2liaWxpdHkgb2YgY29udGVudCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZXMgdGhlIGNoYXQgd2lkZ2V0IHN0YXlzIG9uIHRvcCBvZiBvdGhlciBjb250ZW50ICovXG59XG5cbi8qIEhlYWRlciBzdHlsaW5nICovXG4uY2hhdC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4ZDQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFNldCB0aGUgaGVhZGVyIHRvIHJlbGF0aXZlIHRvIHBvc2l0aW9uIGNoaWxkcmVuIGFic29sdXRlbHkgd2l0aGluIGl0ICovXG59XG5cbi5jb2xsYXBzZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7IC8qIFBvc2l0aW9uIHRvIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIHRoZSBjaGF0LWhlYWRlciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4ZDQ7IC8qIE1hdGNoIHRoZSBoZWFkZXIgYmFja2dyb3VuZCBjb2xvciAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMCA2cHg7IC8qIEEgbGl0dGxlIHBhZGRpbmcgdG8gbWFrZSBpdCBtb3JlIGNsaWNrYWJsZSAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4OyAvKiBTaXplIG9mIHRoZSBidXR0b24gKi9cbiAgICBsaW5lLWhlaWdodDogMjBweDsgLyogQWxpZ24gdGhlIHN5bWJvbCB2ZXJ0aWNhbGx5ICovXG4gICAgaGVpZ2h0OiAyMHB4OyAvKiBEZWZpbmUgYSBmaXhlZCBoZWlnaHQgKi9cbiAgICB3aWR0aDogMjBweDsgLyogRGVmaW5lIGEgZml4ZWQgd2lkdGggKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZXMgdGhlIG91dGxpbmUgdG8ga2VlcCB0aGUgZGVzaWduIGNsZWFuICovXG59XG5cbi5jb2xsYXBzZS1idXR0b246OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIyMTJcIjsgLyogVW5pY29kZSBmb3IgdGhlIG1pbnVzIHNpZ24gKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoYXQtYm9keSB7XG4gICAgZmxleC1ncm93OiAxOyAvKiBBbGxvd3MgdGhlIGNoYXQgYm9keSB0byBmaWxsIHRoZSBzcGFjZSAqL1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5cblxuLyogSW5wdXQgZmllbGQgc3R5bGluZyAqL1xuLnVzZXItaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTsgLyogQ2FsY3VsYXRlIHdpZHRoIGJhc2VkIG9uIHRoZSBwYXJlbnQgd2lkdGggKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDA3OGQ0O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cblxuXG4vKiBNZXNzYWdlIGJ1YmJsZSBzdHlsaW5nICovXG4uY2hhdC1tZXNzYWdlIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiBJbmNyZWFzZWQgZm9udCBzaXplICovXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuXG4vKiBVc2VyIG1lc3NhZ2Ugc3R5bGluZyAqL1xuLnVzZXItbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlOGNmZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IC8qIEFsaWducyB0ZXh0IHRvIHRoZSByaWdodCAqL1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xufVxuXG4vKiBTeXN0ZW0gbWVzc2FnZSBzdHlsaW5nICovXG4uc3lzdGVtLW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IC8qIEFsaWducyB0ZXh0IHRvIHRoZSBsZWZ0ICovXG4gICAgd29yZC13cmFwOmJyZWFrLXdvcmQ7XG59XG5cblxuLyogQm90IG1lc3NhZ2Ugc3R5bGluZyAqL1xuLmJvdC1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLyogQ2xlYXIgZmxvYXRzICovXG4uY2xlYXItZmxvYXQge1xuICAgIGNsZWFyOiBib3RoO1xufVxuIl19 */";
styleInject(css_248z);

var Test = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(Test);

function preview({}) {
    return react.createElement("div", null);
}
function getPreviewCss() {
    return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vc3JjL1Rlc3QuZWRpdG9yUHJldmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCB7IFJlYWN0RWxlbWVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgSGVsbG9Xb3JsZFNhbXBsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVsbG9Xb3JsZFNhbXBsZVwiO1xuaW1wb3J0IHsgVGVzdFByZXZpZXdQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL1Rlc3RQcm9wc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlldyh7ICB9OiBUZXN0UHJldmlld1Byb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aWV3Q3NzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1Rlc3QuY3NzXCIpO1xufVxuXG4gICJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQzdCLElBQUtBLEdBQUcsS0FBSyxLQUFLLENBQUMsRUFBR0EsR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUM5QixFQUFBLElBQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFRLENBQUE7QUFFM0IsRUFBQSxJQUFJLENBQUNGLEdBQUcsSUFBSSxPQUFPRyxRQUFRLEtBQUssV0FBVyxFQUFFO0FBQUUsSUFBQSxPQUFBO0FBQVEsR0FBQTtBQUV2RCxFQUFBLElBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJLElBQUlELFFBQVEsQ0FBQ0Usb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEUsRUFBQSxJQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0VBQzNDRCxLQUFLLENBQUNFLElBQUksR0FBRyxVQUFVLENBQUE7RUFFdkIsSUFBSU4sUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJRSxJQUFJLENBQUNLLFVBQVUsRUFBRTtNQUNuQkwsSUFBSSxDQUFDTSxZQUFZLENBQUNKLEtBQUssRUFBRUYsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxLQUFDLE1BQU07QUFDTEwsTUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEtBQUE7QUFDRixHQUFDLE1BQU07QUFDTEYsSUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEdBQUE7RUFFQSxJQUFJQSxLQUFLLENBQUNNLFVBQVUsRUFBRTtBQUNwQk4sSUFBQUEsS0FBSyxDQUFDTSxVQUFVLENBQUNDLE9BQU8sR0FBR2IsR0FBRyxDQUFBO0FBQ2hDLEdBQUMsTUFBTTtJQUNMTSxLQUFLLENBQUNLLFdBQVcsQ0FBQ1IsUUFBUSxDQUFDVyxjQUFjLENBQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakQsR0FBQTtBQUNGOzs7Ozs7Ozs7Ozs7OztBQ3JCTSxTQUFVLE9BQU8sQ0FBQyxFQUFzQixFQUFBO0FBQzFDLElBQUEsT0FBT08sZ0NBQVcsQ0FBQztBQUN2QixDQUFDO1NBRWUsYUFBYSxHQUFBO0FBQ3pCLElBQUEsT0FBTyxVQUF3QixDQUFDO0FBQ3BDOzs7OzsifQ==