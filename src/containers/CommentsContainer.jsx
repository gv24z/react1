import React, { Component, Fragment } from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
      page: 1,
    }
  }

  loadComments = () => {
    const { page } = this.state;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((comments) => {
        this.setState({
          loading: false,
          comments: this.state.comments.concat(comments),
        })
      })
      .catch(() => { this.setState({ loading: false }); });
  }

  handleScroll = () => {
    let height = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

    if(height - document.documentElement.scrollTop-document.documentElement.clientHeight <= 100) {
      if(!this.state.loading) {
        this.loadComments();
      }
    }
  }

  componentDidMount() {
    this.loadComments();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { loading, comments } = this.state;

    return (
      <Fragment>
        <CommentsList comments={comments} />
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}