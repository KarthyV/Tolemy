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
