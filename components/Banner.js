import React, { useRef, useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const Banner = () => {
  const images = [
    require('../images/banner/banner1.jpeg'),
    require('../images/banner/banner2.jpeg'),
    require('../images/banner/banner3.jpeg'),
  ];

  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const scrollToNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    scrollViewRef.current.scrollTo({
      x: newIndex * Dimensions.get('window').width,
      animated: true,
    });
  };

  // Tự động chuyển đổi hình ảnh sau mỗi 3 giây
  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollToNextImage();
    }, 1000);

    // Xóa interval khi component bị unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={styles.scrollContainer}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleScroll}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          source={image}
          style={styles.bannerImage}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
  },
  bannerImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
});

export default Banner;
