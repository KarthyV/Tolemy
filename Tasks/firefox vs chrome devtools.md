# Differences between chrome devtools and firefox devtools

### How to know which dev-tools is better to go up with while developing phase

---

### **Opening DevTools**

1.  Similar in both the systems - Press `F12` for opening the devTools

---

### **Having a custom snippet**

1.  Snippets are small scripts that you can write temporarily and execute within Source panel
2.  Chrome has the support of writing snippets whereas firefox does not support the same
3.  For Accessing :
    Go to Chrome > Sources > Right Click `more options` > select `snippets`

     <img height="200" width="500" style="object-fit:cover" src="https://i.imgur.com/idfGfwg.png" />

---

### **Flex Box & Grid Debugging**

1.  When it comes to CSS debugging firefox is more advanced on that
2.  Flexbox and Grid are separately visible when you inspect from firefox part
3.  In Chrome, the only way to do this, Is by adding temporary properties in element style column

    <img height="200" width="500" style="object-fit:cover" src="https://i.imgur.com/tlUnWje.png" />

4.  Whereas, In firefox you can see a separate column for flexbox and grid debugging

    <img height="200" width="500" style="object-fit:cover" src="https://i.imgur.com/tqL2835.png" />

---

### **Animation Debugging**

1.  CSS animations and transitions are always good to be implemented but also hard to get it right, firefox has a great debugging feature with animations debugging
2.  Where you can play/pause/rewind animations, jump to a specific point in animation
3.  You can also adjust the animation playback speed.
4.  Inside **Chrome**

    1.  You cannot play/pause/rewind the animations in chrome devtools.
    2.  Available in `More tools` > `Animations`

    <img height="200" width="500" style="object-fit:cover" src="https://i.imgur.com/wghQzeJ.png" />

5.  Inside **Firefox**

    1.  You can play around with pause/play/rewind options
    2.  Adjust the playback rate of each animation

    <img height="200" width="500" style="object-fit:cover" src="https://i.imgur.com/uzYvXPG.png" />

---

### **Font Debugger**

1.  Apart from the flexbox and animations, font selection is a very important property for a web page
2.  Firefox comes prepared with a dedicated debugger for the fonts as well, where you can use all the property by just adjusting them with the panels
3.  Inside **Firefox**

     <img height="200" width="500" style="object-fit:cover" src="https://i.imgur.com/KEIVIsb.png" />

---

### **LightHouse**

1.  Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, and more.
2.  Open Lighthouse from devtools click analyze page – it’ll return audit report based on performance of your web page, can find on which part you performance is affected.
3.  You can also run lighthouse from command line by an node module package
4.  npm –save lighthouse
5.  This is not available with firefox

     <img height="200" width="500" style="object-fit:cover" src="https://i.imgur.com/tCB6jT1.png" />

---

### **Recorder**

1. Chrome’s new Recorder tool allows you to record and replay tests from the browser, export them as a JSON file (and more), as well as measure test performance.
2. We can replay the recording whenever we want to check the flow
3. Once you start recording, all the user interactions are recorded, after stopping the recording, we can replay and check the performance insight for detailed overview on flow
4. For Accessing - `More Tools` > `Recorder`

 <img height="200" width="500" style="object-fit:cover" src="https://i.imgur.com/3U6Jdax.png" />

For Reference on Chrome DevTools [Click Here!](https://developer.chrome.com/docs/devtools/open)

For Reference on Firefox DevTools [Click Here!](https://firefox-source-docs.mozilla.org/devtools-user/index.html)

---

### **Changes**

1. This Tab will show whatever the changes we made in our code on the debugging tool.
2. Changes in CSS which was done in `element.style` will be displayed under the `Changes` panel.
3. The _difference_ in the output will be highlighted.
4. For Accessing : `ctrl` + `shift` + `p` then type `show changes`, only available in _chrome_.
5. More on [Developers doc](https://developer.chrome.com/docs/devtools/changes)
   ![Changes-tab](https://i.imgur.com/QIW9Dhw.png)

---

### **Coverage**

1. The Coverage Tab helps the developers to find the _unused_ Javascript and CSS codes.
2. By doing this, we can speed up our page load.
3. For Accessing : `ctrl` + `shift` + `p` then type `show coverage`, only available in _chrome_.
4. More on [Developers doc](https://developer.chrome.com/docs/devtools/coverage)
   ![coverage-tab](https://i.imgur.com/7k6vDqF.png)

---

### **Issues**

1. The Issues tab puts on a notification in Console indicating a problem found by the browser.
2. The problems involves cookies & multiple content accessing by same component.
3. Suggestions will be provided for enhancing the performance based on the problem.
4. For Accessing : `ctrl` + `shift` + `p` then type `show issues`, only available in _chrome_.
5. More on [Developers doc](https://developer.chrome.com/docs/devtools/issues)
   ![issues-tab](https://i.imgur.com/U6TPYBk.png)

---

### **Memory Inspector**

1. Memory inspector shows us the Array Buffer and Web Assembly buffer data
2. _buffer_ is a way of handling streams of binary data where in Node.js it is available in global object.
3. _ArrayBuffer_ is an object which represents a fixed length raw binary data buffer.
4. Set a breakpoint by opening the `Sources` panel in js file and check the memory inspector, it reveals a hexadecimal address.
5. For Revealing : `More options` > `Memory Inspector` > `Right click the breakpoint` > `Reveal the memory inspector`, only available in _chrome_.
6. More on [Developers doc](https://developer.chrome.com/docs/devtools/memory-inspector/)
   ![memory-inspector](https://i.imgur.com/N21UKvy.png)

---

### **Network Conditions**

1. This Tab lets you control over the network throttling speed.
2. For Accessing : `ctrl` + `shift` + `p` then type `show network conditions`, only available in _chrome_.
3. More on [Developers doc](https://developer.chrome.com/docs/devtools/device-mode/override-user-agent)
   ![network-conditions](https://i.imgur.com/uI4Z2mW.png)

---

### **Network request blocking**

1. This feature is useful to compare pages without and with some files by blocking the request before it reaching it reaches server.
2. By doing this, you can know how your page performs when blocking resources from an entire domain?.
3. How to use this feature?
   - Right click on a resource in the Network Panel.
   - Select _Block request URL_ - this resource is now excluded from subsequent page loads.
4. The blocked request URLs will be available under this tab for reference.
5. For Accessing : `ctrl` + `shift` + `p` then type `show network request blocking`, only available in _chrome_.
6. Know more [here](https://umaar.com/dev-tips/68-block-requests)
7. This feature exists only in _chrome_
   ![network-blocking](https://i.imgur.com/IJYbyya.png)

---

### **Performance Monitor**

1. This feature gives you real-time performance results on CPU usage, JS heap size, event listeners and more.
2. They even allow you to measure the performant of your CSS solutions.
3. For Accessing : `ctrl` + `shift` + `p` then type `show performance monitor`, only available in _chrome_.
4. Know more [here](https://hospodarets.com/chrome-devtools-performance-monitor)
   ![performance monitor](https://i.imgur.com/sy5gqrq.png)

---

### **Rendering**

1. The _Rendering_ tab comes with more features packed, It discovers rendering performance issues.
2. The green box will appear on Spot painting, layout shifts.
3. We can even test pages with different CSS without manually specifying them in your code or testing environment.
4. You can even apply other features such as, Highlight ad frames, emulate focus on a page, disable local fonts and image formats, enable an automatic dark theme, and emulate vision deficiencies.
5. For Accessing : `ctrl` + `shift` + `p` then type `show rendering`, only available in _chrome_.
6. More on [Developer doc](https://developer.chrome.com/docs/devtools/rendering/)
   ![rendering](https://i.imgur.com/SCxF3xj.png)

---

### **Search**

1. We can use this tab for searching a text across all loaded resources.
2. The _Search_ tab doesn't show results from network headers and responses.
3. For Accessing : `ctrl` + `shift` + `p` then type `show search`, only available in _chrome_.
4. More on [Developer doc](https://developer.chrome.com/docs/devtools/search)
   ![search-chrome](https://i.imgur.com/pyaHEel.png)

---

### **Sensors**

1. With this feature, you can overwrite the current location and you can also simulate device orientation.
2. Many websites take advantage of user location to provide relevant experience for their users.
3. So, If you're building a UI based on user location, you want to make sure it the site behaves properly across different location.
4. For Accessing : `ctrl` + `shift` + `p` then type `show sensors`, only available in _chrome_.
5. More on [Developers doc](https://developer.chrome.com/docs/devtools/device-mode/geolocation)
   ![sensors-chrome](https://i.imgur.com/rtf2IGr.png)

---

### **Web Audio**

1. The _Web Audio_ helps to monitor the web apps whichever uses web audio API.
2. Web Audio API provides a powerful system for controlling audio on the web, allowing developers to choose an audio sources, add effects to audio, create audio visualizations, apply spatial effects such as painting and much more.
3. For Accessing : `ctrl` + `shift` + `p` then type `show WebAudio`, only available in _chrome_.
4. More about [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

---

### **Web Authn**

1. Use the _WebAuthn_ tab in Chrome DevTools to create and interact with software-based virtual authenticators.
2. It's more like a virtual authentication.
3. For Accessing : `ctrl` + `shift` + `p` then type `show WebAuthn `, only available in _chrome_.
4. More on [Developers doc](https://developer.chrome.com/docs/devtools/webauthn)

---
