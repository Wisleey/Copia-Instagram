import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './src/Header';
import List from './src/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Mario Bros', 
      descricao: 'Hoje e Dia de Torta de Tomate Com Cogumelos :)', 
      imgperfil: 'https://s2-techtudo.glbimg.com/1o2J-rf2G9qtlQlm82gaq-mFBec=/0x129:1024x952/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png', 
      imgPublicacao: 'https://s2-techtudo.glbimg.com/1o2J-rf2G9qtlQlm82gaq-mFBec=/0x129:1024x952/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png',  
      likeada: false, 
      likers: 100
     },
    {
      id: '2', 
      nome: 'Wisley Rodrigues', 
      descricao: 'Quem Me Acha Lindo Respira ', 
      imgperfil: 'https://scontent.fjpa10-1.fna.fbcdn.net/v/t1.6435-9/48361153_1952650734789019_1582943581721591808_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF-_46Z5oE7Mo9ZboCV1bKc5artiiypI8vlqu2KLKkjy7gFIkQF7WZqSA71Y8qp8V5GMDb3CIJ8rN9NyBU-0s19&_nc_ohc=uOePoWxgcqsAX8n_eYa&_nc_ht=scontent.fjpa10-1.fna&oh=00_AfCLHHyR6Nu6YsnmOJLfUB4qwaiUPGYLesw7bUhgQw1zLQ&oe=64B2D291', 
      imgPublicacao: 'https://scontent.fjpa10-1.fna.fbcdn.net/v/t31.18172-8/14480641_1103453446375423_99145544503695555_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFsBbpZCMD9oSHltB_gwadaSJdWtW8fyBpIl1a1bx_IGpg1g1xeoi-qjwWhAqRvbmKu0Rqly-Oqms9Smf68vzN7&_nc_ohc=R4NVMenM0uwAX-AZwAm&_nc_ht=scontent.fjpa10-1.fna&oh=00_AfAPMJ7XWZpaBt-LXMsiguhXIkH9ELjMYxriOwriCxiYoQ&oe=64B2B24B', 
      likeada: true, 
      likers: 80000
    },
    {
      id: '3', 
      nome: 'Gabriela Lotti', 
      descricao: 'TBT, Saudades Das Minhas Amigas e a Amanda', 
      imgperfil: 'https://scontent.fjpa10-1.fna.fbcdn.net/v/t1.6435-9/91022267_2781120135275404_3485054111718572032_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEPoENz0YnZh_q5CscVRLaQynJy47NPOZ_KcnLjs085n8XV-9LF-ao2sjvITIOlqFba4hh1MIupvL_OiWFUKouQ&_nc_ohc=K1hT3F6IEKMAX8I9r9Y&_nc_ht=scontent.fjpa10-1.fna&oh=00_AfAP4cqjrL-saOezF7ZNKqnN_5Usa5rfPFbjApKsr_0zAA&oe=64B2D563', 
      imgPublicacao: 'https://scontent.fjpa10-1.fna.fbcdn.net/v/t1.6435-9/83248642_1362406327276805_2728462800388096000_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEtqnDJfEkvmDYdud8VdXxSfMD06NyS27t8wPTo3JLbuwN6lr3P8n8bNlAEs3t0Da0Nk_QJnSFS1oSyA_f_1WU8&_nc_ohc=qpqdMRAK-twAX80U7sr&_nc_ht=scontent.fjpa10-1.fna&oh=00_AfDDmSSxrr54DyKBjlpsF3WUHrUixE0_snGiAvL5fMNIpw&oe=64B2CE73',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Wisley Rodigues', 
      descricao: 'Coqueinho', 
      imgperfil: 'https://scontent.fjpa10-1.fna.fbcdn.net/v/t1.6435-9/48361153_1952650734789019_1582943581721591808_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF-_46Z5oE7Mo9ZboCV1bKc5artiiypI8vlqu2KLKkjy7gFIkQF7WZqSA71Y8qp8V5GMDb3CIJ8rN9NyBU-0s19&_nc_ohc=uOePoWxgcqsAX8n_eYa&_nc_ht=scontent.fjpa10-1.fna&oh=00_AfCLHHyR6Nu6YsnmOJLfUB4qwaiUPGYLesw7bUhgQw1zLQ&oe=64B2D291', 
      imgPublicacao: 'https://scontent.fjpa10-1.fna.fbcdn.net/v/t1.6435-9/137219137_3549278718459538_8452487381075987227_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNXYywgqdAVf5vs2UbB71pavP4VYGx_ZFq8_hVgbH9kZbrMw1UsDpx8wScfXaSwBXbWDuu-EFpnUz7PAyzOYbQ&_nc_ohc=L-eCNVe0zlQAX_qTW45&_nc_ht=scontent.fjpa10-1.fna&oh=00_AfDc8S5pzYfZVNF03MgPA97Ykj2_wLjpXT_oVuIlaKVExg&oe=64B2B671', 
      likeada: false, 
      likers:99784
    },
    {
      id: '5', 
      nome: 'Elon Musk', 
      descricao: 'É Se Eu Comprace Essa Porra Aqui?', 
      imgperfil: 'https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg?quality=70&strip=info&w=1024', 
      imgPublicacao: 'https://static01.nyt.com/images/2021/05/09/fashion/07ELON-MEMES1print/merlin_186856077_79eae717-8121-4e4d-9a26-1137eb410690-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      likeada: true, 
      likers: 325
    },
    
    {id: '6', 
      nome: 'Vintage Culture', 
      descricao: 'Eu é o Cara Que Carrega as Minhas Coisas  :)', 
      imgperfil: 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2022/05/1274e73-vintage-culture-1024x683.jpg', 
      imgPublicacao: 'https://wonderlandinrave.com/wp-content/uploads/2021/08/Vintage-e-Alok.png',  
      likeada: true, 
      likers: 1000
     },
  ])


 return (
  <View style={styles.container}>
    <Header/>

    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={ (item) => item.id }
    data={feed}
    renderItem={ ({ item }) => <List data={item} /> }
    />

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

