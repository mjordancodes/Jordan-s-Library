# Process

This is probably the most complex project I am building from idea to deploy, and I wanted to document my learning process along the way.

# Stage 1: Dreaming

I've always loved reading. When I was in middle and highschool I often picked books because they had bizarre titles or covers and I liked the different reactions I would get. When I made the swap to ebooks (which still makes me sad) the worst part was that no one knew what weird things I was reading anymore! 

I also love the idea of a portfolio or personal website really being personal. I want my site to reflect who I am outside of code, and reading is definitely a big part of that. I wanted to create a section of my site that would track the different books I've read and what I am currently reading. 

Version A was a quick table that gets filled in with the title, author name, genre, date started, and date completed. This technically worked, but it wasn't very interesting. I started thinking, if I ignored the technical and all the implementation details, what would I want this section of my site to look like? 

I decided I wanted a sortable and filterable list, where you could click on any title and go to a details page about the book that would list all the times I've read it (since I often read books more than once), and other details about the book that don't fit neatly into a list. And wouldn't it be kind of fun if you could click on an author's name and see all the books by that specific author that I had read? Since going ebook (I can't write in real books. It just isn't doable), I love marking favorite quotes and passages. It would be cool to see that information in the book details page. And maybe there is another page where I can just look at quotes from all the books, and that can be sortable and filterable with tags. And since I am gathering all this information on my reading, I could have another page that would have charts and things to show things like how many pages I read on average per day (based on start/end date and total pages). I could also track which genres I read most often. With all this custom tracking I want to do, I think I am going to have to build an admin dashboard as well, to be able to edit and add books. That way I could track exactly the information I wanted to track and not have to try and fit into some other system. 

That is a lot! I did some fairly basic lo-fi wireframes based on my ideas to start seeing how different pages might come together and get a visual on what sort of data I was going to be working with.

# Stage 2: MVP
All of this sounds pretty cool to me, and if I gave myself more time to dream I'm sure I would come up with way more features. But I also know if I wait for every feature (and all the fun design bits) to be perfect, I was never going to launch this past the simple Version A I put in my initial portfolio. 

Since a big reason behind building this project is to learn new web dev things, I wanted to start kind of simple. Much of the technology would be new to me, so I wanted to make sure that MVP was simple enough that I could accomplish it quickly. I'm lucky to have good friends who are better with these technologies than I am who agreed to help me and do code reviews with me at each stage so that I could be sure that I was using these new tools correctly, so I wanted to make sure that I was iterating fast, but in small enough chunks that we could do those reviews.

MVP is basically going to be the same as Version A. A list of the books I've read (recently), with some basic filtering / sorting / and searching functionality. 

## Building 
Now that I had settled on a MVP, it was time to start building. Since I knew I wanted this to be a React project, I could have just used create-react-app and jumped right in. Instead I decided I wanted to manually set up all the tools so that I could learn more about them. I've used enough React to not be totally uncomfortable in the framework, but I'd never touched my own webpack, or set up eslint, or configured babel or any of that. So I started off slow by creating my own [React Basic Starter Kit](https://github.com/mjordancodes/React-Basic-Starter-Kit) where I had to configure all those things myself.

Using my own starter kit, it was finally time to start working to MVP. 
