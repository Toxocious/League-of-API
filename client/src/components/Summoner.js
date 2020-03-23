import React, { Component } from 'react';

// Main app styling.
import './Summoner.css';

// Main App Class.
export default class Summoner extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			serverResponse: null,

			summoner: {
				name: props.match.params.summoner,
				region: props.match.params.region,
			}
		};
	}

	/**
	 * Fetch the data of the summoner that is being queried.
	 * Passes both the desired region and summoner name in the URL.
	 */
  FetchAPI()
  {
		const safeParams = {
			region: encodeURIComponent(this.state.summoner.region),
			name: encodeURIComponent(this.state.summoner.name),
		};

    fetch(`http://localhost:9000/testAPI?region=${safeParams.region}&name=${safeParams.name}`)
      .then(res => res.text())
      .then(res => this.setState({ 
        serverResponse: res
      }))
			.catch(err => err);
	}
	
	/**
	 * Upon mounting, retrieve data from our server regarding the desired summoner.
	 */
	componentDidMount()
	{
		this.FetchAPI();

		console.log(this.state);
	}

	/**
	 * Render our data.
	 */
	render()
	{
		return (
			<div className='Summoner'>
				<div className='Panel'>
					<div className='Body'>
						<div>{ this.state.serverResponse }</div>
					</div>
				</div>

				<div className='Panel'>
					<div className='Body'>
						<div>Match history, Champion Mastery, etc.</div>
					</div>
				</div>
			</div>
		)
	}
}