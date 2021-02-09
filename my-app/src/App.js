import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    user: '',
    followers: [],
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/mwbrennan')
      .then((res) => {
        console.log(res);
        this.setState({
          user: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })

      axios
        .get('https://api.github.com/users/mwbrennan/followers')
        .then((res) => {
          // console.log(res.data)
          this.setState({
            followers: res.data,
          })
        })
        .catch((err) => {
          console.log(err)
        })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <div className='userBox'>
          <p>Name: {this.state.user.login}</p>
          <p>Following: {this.state.user.following}</p>
          <img className='profilePic' src={this.state.user.avatar_url} alt='profilePic'/>
        </div>
        <div className='followBox'>
        <h3>Followers: </h3>
        <p>
            {
              this.state.followers.map((user) => {
                return(
                  <p>{user.login}</p>
                )
              })
            }
          </p>
        </div>
      </div>
    )
  }


}

export default App;
