import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import MyIcon from '@/components/Icon';
import { useRouter } from 'next/router';

const list = [
  {
    icon: 'kb',
    label: 'MYAI知识库',
    link: '/kb'
  },
  {
    icon: 'appStore',
    label: 'MYAI助手',
    link: '/model'
  },
  {
    icon: 'promotion',
    label: '邀请好友',
    link: '/promotion'
  },
  {
    icon: 'develop',
    label: 'API开发',
    link: '/openapi'
  },
  {
    icon: 'git',
    label: '支持我们',
    link: 'https://storage.mzc77.com/storagee/duomiai/imgs/mzc77gongzhonghao.jpg'
  }
];

const Tools = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  return (
    <Box px={'5vw'}>
      {list.map((item) => (
        <Flex
          key={item.link}
          alignItems={'center'}
          px={5}
          py={4}
          bg={'white'}
          mt={5}
          borderRadius={'md'}
          onClick={() => {
            if (item.link === 'https://storage.mzc77.com/storagee/duomiai/imgs/mzc77gongzhonghao.jpg') {
              setModalOpen(true);
            } else {
              router.push(item.link);
            }
          }}
        >
          <MyIcon name={item.icon as any} w={'22px'} />
          <Box ml={4} flex={1}>
            {item.label}
          </Box>
          <ChevronRightIcon fontSize={'20px'} color={'myGray.600'} />
        </Flex>
      ))}

      {isModalOpen && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="white"
          padding="20px"
          borderRadius="md"
          boxShadow="md"
          textAlign="center" // 居中文本
        >
          <h2>长按关注我们</h2>
          <img
            src="https://storage.mzc77.com/storagee/duomiai/imgs/mzc77gongzhonghao.jpg"
            alt="长按关注我们"
            style={{ marginBottom: '10px' }} // 图片下方留白
          />
          <button
            onClick={() => setModalOpen(false)}
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              padding: '5px 10px',
              borderRadius: '5px',
              background: 'gray',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            关闭
          </button>
        </Box>
      )}
    </Box>
  );
};

export default Tools;
