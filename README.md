# clicky-game

## Summary 
Using React class based componets, this app is a playfull example of how powerfull React is. It's a simple game using slack images from my cohorts. Click on the same image twice and you loose!

## Link to site

[Demo](https://ken-bains.github.io/clicky-game/)

## Site Gif
![Site](assets/clicky.mp4)


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Node JS - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
- React - JavaScript library for building user interfaces.
- React Bootstap - React specific Bootstrap used for styling.

## Code Snippet
```javascript
  getClicked = (clicked) => {

    if (this.state.clickedIds.includes(clicked)) {
      this.setState({ answerText: "You Loose!" });
      if (this.state.topScore < this.state.score) {
        this.setState({ topScore: this.state.score })
      }
      this.setState({ score: 0 })
      this.setState({ clickedIds: [] });
    } else {
      this.setState({ clickedIds: [...this.state.clickedIds, clicked] })
      this.setState({ answerText: "You Guess correctly!!" });
      this.setState({ score: this.state.score + 1 })
    }
    var newList = this.state.list;
    this.shuffle(newList)

  };

```
- The code snippit above is the React logic used when you click an image. It determines if the image has been previously selected and set the score accordingly.  


## Author Links
[LinkedIn](https://www.linkedin.com/in/ken-bains)
[GitHub](https://github.com/ken-Bains)
