import React from "react";
import {Text, View, Dimensions} from "react-native";
import {useDynamicStyleSheet} from "react-native-dark-mode";
import Carousel , {Pagination} from 'react-native-snap-carousel';
import { Image } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe'

import { themedStyles } from "../carousels/Carousels.styles";


export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const Carousels = (items : any) => {
  const styles = useDynamicStyleSheet(themedStyles);
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  

  const renderItem = ( {item, index} : any ) => {
    if (item.type == 'video'){
      return (
        <View style={styles.containerVideo} key={index}> 
          <YoutubePlayer height={200} play={false} videoId={item.imgUrl} />
    
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
    
      )
    }
    else {
      return (
        <View style={styles.containerImagen} key={index}> 
          <Image source={{ uri : item.imgUrl}} style={styles.image}/>
    
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>  
      )
    }

  }

  return (
    <View>
      <View style={{height:  450}} >
        <Carousel 
          layout="default"
          ref={isCarousel}
          data={items.items} 
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          autoplay = {true}
          loop = {true}
          loopClonesPerSide = {1}
          autoplayDelay={3}
          onSnapToItem={(index) => setIndex(index)}
          />
      </View>

      <Pagination
        dotsLength={items.items.length}
        activeDotIndex={index}
        dotStyle={styles.DotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        />
    </View>
  );
};
