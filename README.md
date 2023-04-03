# PlaywrightDebugDemoStart
<h1> Playwright in Typescript - Starting demo project for debugging </h1>
<p>This is a demo project for debugging using Playwright Inspector
</p>
<h1>Setting up project</h1>
<ol>
<li> Creating package.json file inside root folder:


<code>npm init</code>
</li>

<li>Installing playwright browsers, creating tests/ folder


<code>npm i playwright</code>
 </li>
 
 <li>Installing a playwright test-runner


<code>npm i @playwright/test</code>
 </li>

 </ol>



 <h1>Generating and showing report</h1>
 <ol>
 <li> HTML report
 
 <code>npx playwright test --reporter=html </code>
 
 
 <code>npx playwright show-report</code>

</li>


<li> Trace (can be generated when form is filled)


<code>npx playwright test --headed  --trace on --reporter=html</code>

<code> npx playwright show-trace </code>

 </ol>
 
<h1>Steps which will be shown on Demo </h1>
<ul>
<li>Filling form through debugger </li>
<li>Handle prompt window</li>
<li> Change locators using devtools in debugger mode</li>
<li> HTML report, trace <l/i>
</ul>
