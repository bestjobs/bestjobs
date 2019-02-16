# bestjobs

There's nothing wrong with the above, especially now that CSS support is universal in all browsers. For example, you could have a file named TEMPLATE.html on your webserver that looks like this:
```
<!DOCTYPE html>
<html lang='en-US'>
<head>
    <meta charset='UTF-8'>
    <title>Change Me</title>
    <link rel='stylesheet' href='/css.css'>
    <script defer src='/js.js'>
</head>
<body>
    <h1>Change Me</h1>
</body>
</html>
```
You'd then copy this template to /index.html, /about/index.html, /wuffles/index.html to have a root page, an about page, and a page about your dog, respectively. Because you have common CSS and Javascript, you can change some things in common files and have the entire site change when you change just one file.
However, what if you want to have a sidebar with links in it to a bunch of different sections of your site? Sure, you can copy and paste one into every single page on your site, but what if you want to change it later? Editing every single page on your site just to add a single link that shows up everywhere is a royal pain in the rear. This sort of repetitive work is better handled by some sort of HTML generator like a static-site generator(SSG) or a dynamic generator.
or a cached dynamic site (Like workPress Cache for example)
Do you know how many remote exploits WordPress has had in the past five years? Probably thousands. Do you know how many remote exploits Apache or nginx have had in the past five years that an attacker can use to mess up your website and infect your visitors' computers? Maybe one. I used to use WordPress for my site, but realized I was spending more time patching WordPress it than writing things to put on it. I moved to an SSG and haven't looked back.
You can host static sites for free on Github Pages or for pennies on S3 with Cloudflare in front of it.
Frameworks (static site generators) just make them significantly easier to develop and maintain especially if there’s lots of community contributors to said frameworks.
If you're making a one page marketing site, it wouldn't make sense to use an SSG, but if you start to have something with multiple articles, it starts to make loads of sense very quickly.
Imagine you have a blog with 100 posts. Each entry displays the site's header with navigation. You want to add a new entry to your navigation. Without a static generator you have to edit 100+ files. With a generator you edit one single file and rebuild your website. Also you can store your information anywhere you want. The generation process can fetch your sites content from an external API, a database or whatever.

Using caching is pretty close, but you still need a dynamic language like PHP to use your CMS and update your website. Using a static generator you don't need that. Also there are hosting environments especially for static only websites (e.g. GitHub Pages and Netlify). For these CMS with caching is not an option.
### @bestjobs
