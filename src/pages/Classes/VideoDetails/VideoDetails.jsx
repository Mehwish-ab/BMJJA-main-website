import React from "react";
import { VideoDetailsStyled } from "./styles";
import { Container } from "react-bootstrap";
import VideoDescription from "../VideoCard/VideoDescription";
import { SmallHeadingBlack } from ".././../../components/GlobalStyle";
import video1Img from "../../../assets/images/video1.1da1e77ed3716d535e8a.png";
import video2Img from "../../../assets/images/video2.d4c2fcbac63a765c8983.png";
import video3Img from "../../../assets/images/video3.4bf623dc22fcc03e833c.png";
import video4Img from "../../../assets/images/video4.58db418e081ae0cf0111.png";
import video5Img from "../../../assets/images/video5.d6c8cb848bf4292a6aa9.png";
import video6Img from "../../../assets/images/video6.4144047bea383bb2220a.png";
import video7Img from "../../../assets/images/video7.a280b9183547de9c01d6.png";
import video8Img from "../../../assets/images/video8.26b21a863ef0d4f26403.png";
import video9Img from "../../../assets/images/video9.1a7e7cc191305ea58a52.png";
import video10Img from "../../../assets/images/video10.0a62c73459ee0de12252.png";
import video11Img from "../../../assets/images/video11.df92b47435e1eee4eeb3.png";
import video12Img from "../../../assets/images/video12.271e3623749f3140591e.png";

import { useNavigate, useParams } from "react-router-dom/dist";
import VideoDescriptionOfDetail from "../VideoCard/VideoDescriptionOfDetail";
const VideoDetails = () => {
  const videoDetail = [
    {
      id: "1",
      title: "Single-Hand Guard Pass  ",
      description:
        "Seize swift victory with the Single-Hand Guard Pass, mastering martial finesse and precision.",
      img: video1Img,
    },
    {
      id: "2",
      title: "Double Hand Guard pass ",
      description:
        "Master precision with the Double Hand Guard Pass, dominating opponents with tactical finesse.",
      img: video2Img,
    },
    {
      id: "3",
      title: "Side Control Fundamental ",
      description:
        "Hone your grappling finesse with Side Control fundamentals, mastering strategic precision.",
      img: video3Img,
    },
    {
      id: "4",
      title: "Americana from Mount... ",
      description:
        "Perfect your Mount Americana technique, mastering control and submission with finesse.",
      img: video4Img,
    },
    {
      id: "5",
      title: "Trap & Roll (UPA) - Mount... ",
      description:
        "Master strategic evasion with the Trap & Roll (UPA), outmaneuvering opponents with finesse.",
      img: video5Img,
    },
    {
      id: "6",
      title: "Scissors Sweep to Mount ",
      description:
        "Core Jiu Jitsu maneuver utilizing leg control to transition from guard to the mount position. ",
      img: video6Img,
    },
    {
      id: "7",
      title: "Push Kick Sweep to Mount",
      description:
        "Basic Jiu Jitsu technique for transitioning to mount by sweeping the opponent with a push kick",
      img: video7Img,
    },
    {
      id: "8",
      title: "Cross Collar Choke - Close...",
      description:
        "Dominate with the Cross Collar Choke from Close Guard, executing precise control.",
      img: video8Img,
    },
    {
      id: "9",
      title: "Cross Collar Choke - From... ",
      description:
        "Harness the Cross Collar Choke from Mount, mastering control and submission with strategic finesse.",
      img: video9Img,
    },
    {
      id: "10",
      title: "Stand to Open the Guard  ",
      description:
        "Master the art of Stand to Open the Guard, breaking through defenses with strategic finesse and precision.",
      img: video10Img,
    },
    {
      id: "11",
      title: "1st Standing Guard Pass ",
      description:
        "Seize dominance with the 1st Standing Guard Pass, asserting control from the start.",
      img: video11Img,
    },
    {
      id: "12",
      title: "2nd Standing Guard Pass   ",
      description:
        "Advance mastery with the 2nd Standing Guard Pass, asserting control with precision.",
      img: video12Img,
    },
  ];
  const data = [
    {
      id: "1",
      title: "Single-Hand Guard Pass",
      description: (
        <p>
          Guard passing refers to getting past your opponent's knees when he is
          playing guard, and establishing a more dominant position—most
          commonly, side-mount—and holding that position for three to five
          seconds.
          <br />
          <br />
          <h6>00:00:32 - 00:34:59 </h6>
          <br />
          To start, we’re going to get our grips, both us and our partner. The
          right hand grips on to both lapels, leaving our left hand free to go
          to control their belt. However, note here that the belt moves a lot,
          so we try the kimono - again, notice that there is movement here.
          Instead of taking a grip of the belt or kimono we're going to control
          the trousers. The elbow of the arm holding the trousers, moves inside
          the knee. This gives us a a really good posture here.
          <br />
          <br />
          <h6>00:00:35:12 - 00:01:01:53 </h6>
          <br />
          We can test the strength of our posture by our partner pulling down.
          If we are in the correct strong posture, we are not pulled down, we’re
          locked firmly in place. If we are easily pulled down by our partner,
          the posture is not a good strong one.
          <br />
          <br />
          <h6>01:02:15 - 01:33:37 </h6>
          <br />
          In this position, we are aiming to have our hand flat to their body,
          with the elbow not locked with just a little a bend in it. We don’t
          put any strength or effort in to this until we feel or partner start
          to pull. Once we feel the pull, we curve our body a bit, draw in our
          core and stay here. Once we have achieved this position, there are
          many ways to open the guard. Start by bringing the right hand in and
          finding a grip on their trousers, similar to the left. Our elbow
          follows and goes inside the leg - and this is where we prepare to
          begin to open the guard.
          <br />
          <br />
          <h6>01:34:07 - 01:58:36 </h6>
          <br />
          We push ourselves back, to create space between us and our partner,
          then shift our weight slightly to the right and bring our left knee
          into the middle of their coccyx to create the L-shape with our legs.
          Then we push our weight down through the right elbow, moving our
          partner’s leg to the ground.
          <br />
          <br />
          <h6>01:59:08 - 02:26:12 </h6>
          <br />
          From here, we lower our body, shift weight to our left and pick up our
          partner's knee, passing it on to our left shoulder. Once we have the
          leg over our shoulder we move back up and in, sitting to the middle
          with our legs in a good L-shape. From here our left hand goes for a
          grip - we can take hold of our own lapel, or reach for our partner’s
          lapel. Draw in the elbows, and we pop on to our toes, in order to
          allow us to push. We push forward, aiming our partner’s knee towards
          their nose. We apply pressure on them with our body by just moving
          forward.
          <br />
          <br />
          <h6>02:26:12 - 02:55:47 </h6>
          <br />
          We push forward, aiming our partner’s knee towards their nose. We
          apply pressure on them with our body by just moving forward. Once we
          arrive at a place that we can move round their leg, we just walk round
          to their side body then punch their leg away with our left shoulder.
          Drop our body low, and adjust into side control.{" "}
        </p>
      ),
      src: "https://www.youtube.com/embed/lvBHGGK_WcQ",
    },
    {
      id: "2",
      title: "Double-Hand Guard Pass",
      description: (
        <p>
          Guard passing refers to getting past your opponent's knees when he is
          playing guard, and establishing a more dominant position—most
          commonly, side-mount—and holding that position for three to five
          seconds.
          <br />
          <br />
          <h6> 04:31 - 00:27:44</h6>
          <br />
          In this video, we take a look at the second pass, which is very
          similar to the first one. In fact, the first four steps are exactly
          the same. This time our partner will put in a block, and from that,
          we'll go around and create the second guard pass. To start we get our
          grips, on their lapel and trousers as in the last tutorial, our
          partner gets their grips on too.
          <br />
          <br />
          <h6>00:28:13 - 01:13:01 </h6>
          <br />
          Again, we check our balance. When we've got a good strong posture then
          we can begin to pass the guard - moving our hand to the right place,
          elbows in and we can start to think about opening our partner's legs.
          Follow the same procedure, move our weight onto their leg pushing down
          with our elbow. Then lower our body, shift ourselves up and under,
          moving their leg over our shoulder. Pop up on to our toes to give us
          movement, prepare our elbows, bring them in, then go for the push and
          remember we're trying to bring the knee to the nose - it's at this
          point that our partner puts in the block.
          <br />
          <br />
          <h6> 01:14:02 - 01:42:24</h6>
          <br />
          Now from here, we need to move back to the right. Our right arm will
          need to feed through under their leg - but we don't want all our
          weight here through our elbow because this is not strong - instead, we
          bring our knee under, creating more stability. In this position, both
          go our partner's knees will be pointing up. We adjust our hands to
          grip on their lapels.
          <br />
          <br />
          <h6>01:43:00 - 02:07:35 </h6>
          <br />
          Now we are in a position to open up the tripod. We've got a good
          balance here. Choose the side we want to go to, walk around until we
          are in the correct place to shoulder punch, keeping our body low, we
          arrive in side control again, bring our knees close to their body and
          we finish the position.
        </p>
      ),
      src: "https://www.youtube.com/embed/H9qe1vdj_Oc",
    },
    {
      id: "3",
      title: "Side Control Fundamental",
      description: (
        <p>
          Getting to the mount position can be a daunting task. Although side
          control itself is one of the most dominant positions, there are times
          when moving to mount is called for, whether in a point-scoring
          situation or for general positional improvement. We'll go over four
          different methods to get to the mount position and take a look at some
          situational tricks you can use to get the job done. First of all, we
          must pass the guard to arrive at side control. This is a very
          important position in Jiu Jitsu, and also for grappling in MMA. It’s
          an extremely dominant position. This tutorial looks at how to achieve
          mount from side control.
          <br />
          <br />
          <h6>00:00:03 - 00:28:41</h6>
          <br />
          Once we arrive at side control, one of the things we want to do is to
          make sure that our partner’s elbow is out in the open because this
          will make them that little bit weaker. We control our partner’s arm
          with our arm closest to their body.
          <br />
          <br />
          <h6>00:00:29:12 - 00:01:00:09</h6>
          <br />
          Then move the arm that is near their head, over and around them,
          reaching to grab their belt. Once we have a grip on the belt, we
          release our other arm and it travels round to their hip, next to our
          knee.
          <br />
          <br />
          <h6>00:01:01:19 - 00:01:23:23 </h6>
          <br />
          From here we are in a position of control on both sides of their hips.
          Now we switch our legs, away from the head, knee going to touch where
          our hand is - this gives a nice low base. Post with the back leg for
          stability - in case we get pushed back.
          <br />
          <br />
          <h6>00:01:23:47 - 00:01:59:19</h6>
          <br />
          This way. So if I get this push, I can anchor myself. And I'm here in
          a really strong position. Now they've got all of these in place. I
          will look at how I can mount him. He has already put a block in here.
          Now we need to kind of see it through in the beginning. A simple way
          of doing it is just by pushing this away and moving back at the same
          time to allow the space between my body and his body. With our legs
          posted and our body weight over them, we can anchor ourselves - so
          even if they push here, we are strong. Once all these points are in
          place, we can look at how to get to the mount. It is likely our
          partner has put a block in, so we need to move around it. A simple way
          to do this is by pushing their blocking knee away with our free hand
          and at the same time moving back to make space between our body and
          our partner’s.
          <br />
          <br />
          <h6>00:02:00:25 - 00:02:21:36</h6>
          <br />
          From here we move in closer again with our body and slide our leg over
          our partner’s body, leading with the knee. We have kept hold of the
          belt with our lower arm throughout this process so far. With one leg
          over we can now begin the transition - slide our body over, releasing
          the belt moving that hand under our partner until we arrive in mount.
          We arrive into mount really, really low.{" "}
        </p>
      ),
      src: "https://www.youtube.com/embed/fd1xC1YsPUg",
    },
    {
      id: "4",
      title: "Americana from Mount Fundamental",
      description: (
        <p>
          The Americana is a shoulder and elbow lock technique
          <br />
          <br />
          00:00:00:03 - 00:00:28:41<h6></h6>
          <br />
          Okay. Now, we are able to pass the guard. We have arrived at side
          control. And this is a very important position in this Jiu Jitsu, and
          grappling in MMA. Extremely dominant position. But we are going to
          look at how to mount from side control. So I arrived here. One of the
          things I want to do is to make sure that his elbow is out in the open
          because this will make Romulo or our partner a little bit weaker.
          <br />
          <br />
          <h6>00:00:29:12 - 00:01:00:09</h6>
          <br />
          So this is the position that we finished the previous passing guard
          Okay. So I am here in side control, what I want to do is to control
          this arm and move my other arms over him and if I can, I will reach to
          get the belt at this moment. If you come onto this side, my right hand
          will travel and I go by his hip.
          <br />
          <br />
          <h6>00:01:01:19 - 00:01:23:23</h6>
          <br />
          Where I kind of has some sort of control on both sides of his hips. So
          if you keep on coming onto this side, now I will switch my legs, and
          my knee going to touch where my hand is, this gives me a nice base and
          I'm low. I am also with the back of my leg just posting in case I get
          a push in here.
          <br />
          <br />
          <h6>00:01:23:47 - 00:01:59:19</h6>
          <br />
          This way. So if I get this push, I can anchor myself. And I'm here in
          a really strong position. Now they've got all of these in place. I
          will look at how I can mount him. He has already put a block in here.
          Now we need to kind of see it through in the beginning. A simple way
          of doing it is just by pushing this away and moving myself back at the
          same time to allow the space between my body and his body.
          <br />
          <br />
          <h6>00:02:00:25 - 00:02:21:36</h6>
          <br />
          Now I will move back. Then my legs. I'm still holding the belt here
          and now begin the transition. My right hand goes under him and I move
          until I get the mount. And we arrive here really, really low.
        </p>
      ),
      src: "https://www.youtube.com/embed/jhh9qHQ8LlA",
    },
    {
      id: "5",
      title: "Trap & Roll (UPA) - Mount Escape",
      description: (
        <p>
          <br />
          <br />
          <h6>00:00:00:14 - 00:00:23:48 </h6>
          <br />
          Okay, guys, we have looked at how to mount, how to achieve an
          Americana. Now let's look at what the person from the bottom would be
          doing. What I'm trying to do here in order to escape, is to control
          one of his sides and block this from posting on the floor. Okay. So I
          am choosing to attack this side.
          <br />
          <br />
          <h6>00:00:24:10 - 00:00:45:40 </h6>
          <br />
          In fact, I do not choose. The Romulo has chosen our partner. We will
          choose by initiating the attack. So as soon as I see an attack, which
          means he's coming to my neck. I need to address that. So what I'm
          going to do is the hand goes deeper. I'll control here and I'll take
          the slack and I give myself a little bit of space.
          <br />
          <br />
          <h6>00:00:46:01 - 00:01:09:39 </h6>
          <br />
          We do not have much time here. Now, this elbow that is kind of open
          goes close push and the foot will go over and control nicely. So here
          I grabbed my other foot and I bring here and that control as much as
          they can. Now, this guy is going to be used to for me to lift him off
          the floor.
          <br />
          <br />
          <h6>00:01:10:06 - 00:01:28:03 </h6>
          <br />
          Now we'll get my left hand and when I find it slack on his guy and I'm
          going to grab that. And when I close, I'm not doing anything as you
          give me a nice light when I lift my hips up. I'm going to pull this
          down. So now I need to look towards the side that I am going.
          <br />
          <br />
          <h6> 00:01:28:03 - 00:01:50:21</h6>
          <br />
          The more the look will be, the better for me. And I'm going to lift
          his head. I can get to the maximum height and I'm pulling that down. I
          move again. My posture is my control, and he will get his grips. And
          we finish here.
        </p>
      ),
      src: "https://www.youtube.com/embed/0oFvXPGb9bE",
    },
    {
      id: "6",
      title: "Scissors Sweep to Mount",
      description: (
        <p>
          <h6>00:00:00:12 - 00:00:30:52 </h6>
          <br />
          Okay. Let's have a look at the scissors sweep. I am going to get my
          grips and travel my hands as high as I can. Bring my knee to his
          sternum, I drop my legs to the floor here, and I'm going to pull
          Romulo up. I need to make him light first. And as I do, I'm going to
          try to connect my knees to apply the scissors sweep and I finish on
          the mount.
          <br />
          <br />
          <h6>00:00:32:04 - 00:00:35:31 </h6>
          <br />
          Let's have a look at the details.
          <br />
          <br />
          <h6>00:00:41:18 - 00:01:09:48 </h6>
          <br />
          So when I'm doing it, I need to go to the opposite lapel and find my
          way up. I'm going to be careful here not to have my arms straightened.
          So I'm going to move to the side. Going to come up. I'm going to climb
          up as high as I can. Now I bring my knee, drop, pull and I use here,
          my legs go this way and the other leg that way be applying the
          scissors motion.
          <br />
          <br />
          <h6>00:01:10:03 - 00:01:14:20 </h6>
          <br />
          And I finish on top. That is the scissors sweep.
        </p>
      ),
      src: "https://www.youtube.com/embed/aMxvHNxrGp4",
    },
    {
      id: "7",
      title: "Push Kick Sweep to Mount",
      description: (
        <p>
          00:00:00:12 - 00:00:30:52 <h6></h6>
          <br />
          Okay. Let's have a look at the scissors sweep. I am going to get my
          grips and travel my hands as high as I can. Bring my knee to his
          sternum, I drop my legs to the floor here, and I'm going to pull
          Romulo up. I need to make him light first. And as I do, I'm going to
          try to connect my knees to apply the scissors sweep and I finish on
          the mount.
          <br />
          <br />
          <h6>00:00:32:04 - 00:00:35:31 </h6>
          <br />
          Let's have a look at the details.
          <br />
          <br />
          <h6>00:00:41:18 - 00:01:09:48 </h6>
          <br />
          So when I'm doing it, I need to go to the opposite lapel and find my
          way up. I'm going to be careful here not to have my arms straightened.
          So I'm going to move to the side. Going to come up. I'm going to climb
          up as high as I can. Now I bring my knee, drop, pull and I use here,
          my legs go this way and the other leg that way be applying the
          scissors motion.
          <br />
          <br />
          <h6>00:01:10:03 - 00:01:14:20 </h6>
          <br />
          And I finish on top. That is the scissors sweep.
        </p>
      ),
      src: "https://www.youtube.com/embed/TaFoWpu5Mi4",
    },
    {
      id: "8",
      title: "Cross Collar Choke -Close Guard",
      description: (
        <p>
          <h6>00:00:00:12 - 00:00:30:52 </h6>
          <br />
          Okay. Let's have a look at the scissors sweep. I am going to get my
          grips and travel my hands as high as I can. Bring my knee to his
          sternum, I drop my legs to the floor here, and I'm going to pull
          Romulo up. I need to make him light first. And as I do, I'm going to
          try to connect my knees to apply the scissors sweep and I finish on
          the mount.
          <br />
          <br />
          <h6>00:00:32:04 - 00:00:35:31 </h6>
          <br />
          Let's have a look at the details.
          <br />
          <br />
          <h6>00:00:41:18 - 00:01:09:48 </h6>
          <br />
          So when I'm doing it, I need to go to the opposite lapel and find my
          way up. I'm going to be careful here not to have my arms straightened.
          So I'm going to move to the side. Going to come up. I'm going to climb
          up as high as I can. Now I bring my knee, drop, pull and I use here,
          my legs go this way and the other leg that way be applying the
          scissors motion.
          <br />
          <br />
          <h6>00:01:10:03 - 00:01:14:20 </h6>
          <br />
          And I finish on top. That is the scissors sweep.
        </p>
      ),
      src: "https://www.youtube.com/embed/nKvmwt3-Dq8",
    },
    {
      id: "9",
      title: "Cross Collar Choke - From Mount",
      description: (
        <p>
          <h6>00:00:01:22 - 00:00:11:32 </h6>
          <br />
          Let's have a look at the cross-collar choke from the mount
          <br />
          <br />
          <h6>00:00:15:17 - 00:00:38:59 </h6>
          <br />
          Okay. Let's have a look at the details. You've achieved Mount. You've
          got a good balance. on your partner and you're going to cross. So
          you're going to use your left hand to open the lapel. Your right hand
          with four fingers, this time going to feed all the way through. At
          this time you will pull with your left as you feed with your right.
          <br />
          <br />
          <h6>00:00:39:31 - 00:01:07:58 </h6>
          <br />
          Now you are going to drop your weight on the person. But you need to
          use your left hand to go under as it goes under it. You're going to
          drop your head onto the floor and apply pressure. One detail here.
          When I'll drop my head to the side, I've got my hands, my right hand,
          because my left-hand goes under.
          <br />
          <br />
          <h6>00:01:08:51 - 00:01:19:38 </h6>
          <br />
          So to the side that my hand is over, I will drop my head and apply the
          pressure. That's a cross-collar choke from mount{" "}
        </p>
      ),
      src: "https://www.youtube.com/embed/Y1DQ2Y0Tbsg",
    },
    {
      id: "10",
      title: "Stand to Open the Guard",
      description: (
        <p>
          <h6>00:00:00:08 - 00:00:21:04 </h6>
          <br />
          Let's have a look at how to open the guard when we have to stand up.
          So here we go.
          <br />
          <br />
          <h6>00:00:25:49 - 00:01:01:03 </h6>
          <br />
          Some of the details. Every time you are trying to pass anyone's guard
          you must have posture. And sometimes it is very, very difficult to
          open without standing up. So I need to make sure I'm secure before I
          begin to stand up or control his arm. And if I can. I will pin it so
          he can not grab my legs, so I can move my leg out and bring it back in
          pointing my knees up.
          <br />
          <br />
          <h6>00:01:01:33 - 00:01:29:37 </h6>
          <br />
          And I'm straight. Now posting my right foot out there allows me to
          come up. I need to put pressure on his sternum to counter my standing
          up as I do take a step. I posture it up and I bring this hand with me
          and I'll push it down and achieve what I needed to do, which was to
          open.
          <br />
          <br />
          <h6>00:01:29:37 - 00:01:31:54 </h6>
          <br />
          His guard{" "}
        </p>
      ),
      src: "https://www.youtube.com/embed/EH2gsxvcTsI",
    },
    {
      id: "11",
      title: "1st Standing Guard Pass",
      description: (
        <p>
          {" "}
          <h6>00:00:00:14 - 00:00:37:38</h6>
          <br />
          Now that you've seen how just stand up and open the close guard. Let's
          have a look at how to stand up and open the close guard again and
          pass. We're going to borrow the same position that we've seen it
          before, which is a single-hand guard pass, but only the difference now
          will be standing. Okay, here we go.
          <br />
          <br />
          <h6>00:00:41:42 - 00:01:07:42</h6>
          <br />
          Okay, let's have a look at the details. Stage one posture is really,
          really important. I post my left leg and I come back here in the
          middle in neutral. I post my right leg, and I will begin to stand up
          with pressure down, as was spoken before. In a step, I will pull This
          arm with me and I would begin to push either push.
          <br />
          <br />
          <h6>00:01:08:13 - 00:01:23:43</h6>
          <br />
          I would take this step. Now I circle my hands, I’ve dropped, I feed
          onto my shoulders, going deeper as they can. And I would begin to
          point push his knee towards his nose. Walk, Walk.
          <br />
          <br />
          <h6>00:01:25:54 - 00:01:27:28</h6>
          <br />
          And I arrive at the side control.{" "}
        </p>
      ),
      src: "https://www.youtube.com/embed/lD0YovZkLBE",
    },
    {
      id: "12",
      title: "2nd Standing Guard Pass",
      description: (
        <p>
          0 <h6>0:00:00:22 - 00:00:36:08</h6>
          let’s have a Look at another option that we have when we stand up.
          <h6>00:00:38:08 - 00:01:13:55</h6>
          Okay. Let's have a look at the details here. So just like when we were
          in the close guard and we use the single-hand pass and they have
          putted a block, We had to look for the double-hand guard pass. And we
          are exactly doing the same thing. So I've made my way up. I've managed
          to open these guys.
          <h6>00:01:14:50 - 00:01:46:00</h6>
          I've dropped for a single come to this side. And as I've pushed, he
          puts the block and I can't go any further. Now my hands are going to
          go under to achieve the double under, and they're going to push his
          knees towards his nose. Walk, Walk, Walk. Drop and finish it inside.
          Control.{" "}
        </p>
      ),
      src: "https://www.youtube.com/embed/aFrZBT8l3Y",
    },
  ];
  const { videoId } = useParams();
  const videoData = data.find((item) => item.id === videoId);
  // console.log("video Data",data,videoId,videoData)
  return (
    <VideoDetailsStyled>
      <Container>
        <div className="d-flex flex-wrap gap-3">
          <div className="video-details-section">
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src={videoData.src}
                title="1st Lesson Fundamentals Single Hand Guard pass - Brighton Marina Jiu Jitsu Academy - www.bmjja.co.uk"
                frameborder="10x"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="title my-3">
              <SmallHeadingBlack style={{fontSize:'24px'}}>{videoData.title}</SmallHeadingBlack>
            </div>
            <div className="details">{videoData.description}</div>
          </div>

          <div className="videos-section d-flex flex-column gap-3">
            {videoDetail.map((item) => (
              <VideoCard id={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </VideoDetailsStyled>
  );
};

export default VideoDetails;

const VideoCard = ({ img, title, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="video-card d-flex align-items-center justify-content-start"
      onClick={() => navigate(`/videos/${id}`)}
    >
      <div className="image">
        <img src={img} alt="" />
      </div>
      <VideoDescriptionOfDetail
        heading={title}
         views={"3.5M"}
        time={"1 year ago"}
      />
    </div>
  );
};
