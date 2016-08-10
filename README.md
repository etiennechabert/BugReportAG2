# BugReportAG2
Exemple Ag2 app for bug reporting

After cloning this repository :
* npm install
* npm start

Open your console, you found this error :

**Template parse errors: can't bind to 'value' since it isn't a known property of 'bug'. ("<bug [ERROR ->][value]="value"></bug>"): AppComponent@0:5"**

How to fix it ?

**Open app/app.component.ts and uncomment line 6 (the directives declaration)**

Now it's working

Conclusion ?

**I think the error wasn't explicit and didn't help to found and fix the issue.**

What should be the error ?

**Template parse errors: Unknown HTML Selector 'bug' ...**  
