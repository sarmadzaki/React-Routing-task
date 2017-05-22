import React, { Component } from 'react';
import './App.css';
import Books from './components/books.jsx'
import './bootstrap.css'
export const books = [
  {
    id: 0,
    auther: 'Azet Marden',
    title: 'React Quickly',
    download: 'https://www.google.com.pk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0ahUKEwjjirbhqoPUAhXDbBoKHQD_DHsQFggwMAM&url=https%3A%2F%2Fsites.google.com%2Fsite%2Fgfhjgfdrftghdrfth5743%2Fhygfhdrtghdsrfghsdr7543%2FReact-Quickly.pdf&usg=AFQjCNEuVzws4DVccle0Ib7FPl7eU1usjw&sig2=FJmUF5kGbitf8aRTXYhBGQ',
    src: `${process.env.PUBLIC_URL}/react-quickly.jpg`,
    details: 'React is a JavaScript library developed for one main reason—to build reusable UI components that present ever-changing data. The React philosophy is to focus solely on the user interface.'
  },
  {
    id: 1,
    auther: 'Ari Lerner',
    title: 'Ng-Book - The Complete Book on Angularjs',
    src: `${process.env.PUBLIC_URL}/ngbook.jpg`,
    download: 'https://www.google.com.pk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&sqi=2&ved=0ahUKEwjG__jQqoPUAhUBvBoKHfdgAegQFgggMAA&url=http%3A%2F%2Fpepa.holla.cz%2Fwp-content%2Fuploads%2F2015%2F10%2Fng-book-The-Complete-Book-on-AngularJS.pdf&usg=AFQjCNGr-kl8pTl1nFNxgpMEawAXT1P5_Q&sig2=CCQUGtAXpUfk0wD8aEPuJQ',
    details: 'Ready to master AngularJS? What if you could master the entire framework - with solid foundations - in less time without beating your head against a wall? Imagine how quickly you could work if you knew the best practices and the best tools?'
  },
  {
    id: 2,
    auther: 'Mark Myers',
    title: 'The Smarter Way To Learn Javascript',
    src: `${process.env.PUBLIC_URL}/jsbook.jpg`,
    download: 'https://www.google.com.pk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&sqi=2&ved=0ahUKEwivkPy1qoPUAhXHORoKHasKC9QQFgggMAA&url=http%3A%2F%2Fdit.dru.ac.th%2Fhome%2F004%2Fclassicweb%2Ffor_member%2Ffilekm%2FASmarterWaytoLearnJavaScript.pdf&usg=AFQjCNEnLaP-pc3rDH4DiVLlysJzjFq62Q&sig2=J6vzv5hMwQG6B92NPzOfkQ',
    details: 'The most enthusiastically reviewed programming book on AmazonBuy the book and get access to all 1,750 interactive exercises free."Damn, this program is ridiculously good.'
  },
  {
    id: 3,
    auther: 'Bonnie Eisenman',
    src: `${process.env.PUBLIC_URL}/native.jpg`,
    title: 'Learn React Native',
    download: 'http://pepa.holla.cz/wp-content/uploads/2016/12/Learning-React-Native.pdf',
    details: 'Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native'
  }
]

class App extends Component {

  render() {
    return (
      <div>
        <h1>Library</h1>
        <Books books={books} />
      </div>
    );
  }
}

export default App;
