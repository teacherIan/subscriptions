<script lang="ts">
	import { Presentation, Slide, Vertical, FitText, Step } from '@components'
	import Background from './pixi/Background.svelte';
	


	document.addEventListener('keydown', () => {
		if(document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
		}
		
	});

	document.addEventListener('click', () => {
		if(document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
		}
		
	});

	
</script>

<Presentation >

	<Background />
  
  <Slide animate animateId="one">
	
	<div  class="text"><FitText>Subscriptions</FitText></div>
	<div  data-id="one-two" class="emoji emojiRed">🌶️</div>	
	<div  data-id="one-three" class="emoji emojiRed">🌶️</div>
	<div  data-id="one-four" class="emoji emojiGray">🌶️</div>
	<div  data-id="one-five" class="emoji emojiGray">🌶️</div>
	<div  data-id="one-six"  class="emoji emojiGray">🌶️</div>

	</Slide>
	<Slide animate animateId="one">
		<!-- <div class="text"><FitText>Contents:</FitText></div> -->
		<div  class="text"><FitText>Subscriptions</FitText></div>
		<div  class="text">Slides:</div>

		<div class="text">What Makes a Viable Subscription</div>
		<div class="text">Process for Requesting a Subscription</div>
		<div class="text">Ordering Process</div>

	</Slide>  

	<Slide animate animateId="one">
		<div class="text"><FitText>What Makes a Viable Subscription</FitText></div>
		<Step fadeInThenSemiOut><div class="text-small">Must: Accessible without a VPN</div></Step>
		<Step fadeInThenSemiOut><div class="text-small">Cost: Below $9 per student, negotiable through EDTech</div></Step>
		<Step fadeInThenSemiOut><div class="text-small">Preferred: Application software that can be installed locally</div></Step>
		<Step fadeInThenSemiOut><div class="text-small">Beneficial: All school subscriptions</div></Step> </Slide>

	<Slide animate animateId="Two">
		<div class="text"><FitText>Process for Requesting Subscriptions</FitText></div>
		<Step fadeInThenSemiOut><div class="text-small">1. <div class="teal">Verify</div> existing subscriptions</div></Step>
		<Step fadeInThenSemiOut><div class="text-small">2. Request subscription via email to EdTech Coordinator</div></Step>
		<Step fadeInThenSemiOut><div class="text-small">3. EdTech Coordinator performs initial feasibility checks</div></Step>
		<Step fadeInThenSemiOut><div class="text-small">4. Complete <div class='teal'>subscription form</div> with EdTech Coordinator's assistance</div></Step>
		</Slide>

		<Slide animate animateId="four">
			<div class="text"><FitText>Ordering Process</FitText></div>
			<Step fadeInThenSemiOut><div class="text-small">1. Teacher submits completed request form to EdTech Coordinator via email</div></Step>
			<Step fadeInThenSemiOut><div class="text-small">2. EdTech Coordinator forwards request form and comments to Director of Technology and Deputy Superintendent for review</div></Step>
			<Step fadeInThenSemiOut><div class="text-small">3. Deputy Superintendent evaluates request and, if approved, completes purchase request with finance department</div></Step>
			<Step fadeInThenSemiOut><div class="text-small">4. Director of Technology updates software database. </div></Step>
			<Step ><div class="text-small">5. EdTech Coordinator sets up training for subscribers and promotes awareness of new subscription</div></Step>
			</Slide>



  
</Presentation>

<style lang="scss">

	* {
		font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
	}

.text-small {
		color: #ffb700;
		user-select: none;
		font-size: 2rem;
		font-weight: 900;
		
	}

	.text {
		color: #ffb700;
		user-select: none;
		font-size: 2.2rem;
		// font-weight: 900;
		font-weight: 900;
		
	}

	.emoji {
		display: inline-block;
		font-size: 7rem;
		user-select: none;
		
	}

	.teal {
		display: inline-block;
		color: hsl(180 100% 50%);
		/**underline text*/
		text-decoration: underline;
		user-select:initial;
		cursor: pointer;

	}

	.red {
		display: inline-block;
		color: hsl(0 100% 50%);
		/**underline text*/
		// text-decoration: underline;
		user-select: none;
	}

	.emojiGray {
		filter: grayscale(100%);
	}


</style>