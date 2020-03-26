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
			summoner: '',
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

	// Update the state of the summoner's region.
	UpdateRegion = (e) =>
	{
		this.setState({
			region: e.target.value
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
				<div className='Panel'>
					<div className='Body'>
						<div className="customInput">
							<select onChange={ this.UpdateRegion }>
								<option value='NA'>NA</option>
								<option value='EUW'>EUW</option>
								<option value='EUNE'>EUNE</option>
								<option value='JP'>JP</option>
							</select>

							<input
								onChange={ this.UpdateName }
								placeholder='Summoner Name'
								maxLength='16'
								className='inputField'
								autoComplete="off"
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
				</div>
			</div>
		)
	}
}

export default withRouter(Home);