import React, { Component } from 'react';
import { Box, Media, Content, Level, Image, Icon, Container } from 'reactbulma';

class box extends Component {

	render() {

		let details = this.props.details[this.props.index];
		let date = new Date(details.created_at);

		return (
			<Container style={{ marginTop: 20 }}>
				<Box>
				  <Media>
				    <Media.Left>
				      <Image is='64x64' src={ details.user.profile_image_url } alt="Image"/>
				    </Media.Left>
				    <Media.Content>
				      <Content>
				        <p>
				          <strong>{ details.user.name }</strong> <small>@{ details.user.screen_name }</small> <small>{ date.toDateString() }</small>
				          <br/>
				          { details.text }
				        </p>
				      </Content>
				      <Level mobile>
				        <Level.Left>
				          <Level.Item>
				            <Icon small><i className="fa fa-reply"/></Icon>
				          </Level.Item>
				          <Level.Item>
				            <Icon small><i className="fa fa-retweet"/></Icon>
				          </Level.Item>
				          <Level.Item>
				            <Icon small><i className="fa fa-heart"/></Icon>
				          </Level.Item>
				        </Level.Left>
				      </Level>
				    </Media.Content>
				  </Media>
				</Box>
			</Container>
		);

	}

}

export default box;