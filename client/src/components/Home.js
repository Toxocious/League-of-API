import React, { Component } from 'react';
import { withRouter } from 'react-router';

// Main app styling.
import './Home.css';

// Main App Class.
class Home extends Component
{
	// Constructor
	constructor(props)
	{
		super(props);

		this.state = {
			region: 'NA',
			summoner: 'Absol',
		}
	}

	// Update the state of the summoner name that the client is searching for.
	UpdateName = (e) =>
	{
		const summonerName = e.target.value;
		
    this.setState({
			summoner: summonerName,
    });
	}

	// Fetch the summoner's data from the node server.
	FetchSummoner = () =>
	{
		// Don't allow someone to search for a blank summoner name.
		// Ideally, return an error notification box.
		if ( this.state.summoner === '' )
		{
			return;
		}
		
		this.props.history.push(`/Summoner/${this.state.region}/${this.state.summoner}`);
	}

	// Render the DOM.
	render()
	{
		return (
			<div className='Home'>
				<div className="customInput">
					<input
						onChange={ this.UpdateName }
						placeholder='Summoner Name'
						maxLength='16'
						className='inputField'
						type='text'
						id='summonerName'
					/>
					<label
						htmlFor='Summoner'
						className='inputLabel'
					/>

					<button onClick={ this.FetchSummoner }>Fetch Summoner</button>
				</div>
			</div>
		)
	}
}

export default withRouter(Home);