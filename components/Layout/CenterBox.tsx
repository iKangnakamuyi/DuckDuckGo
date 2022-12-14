import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Nav from './Nav'

export default function CenterBox({
  children,
  title,
  ...props
}: {
  children: React.ReactNode
  title?: string
}) {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{title ? `${title} - DDG Email Panel` : 'DDG Email Panel'}</title>
        <meta
          property="og:title"
          content={title ? `${title} - DDG Email Panel` : 'DDG Email Panel'}
        />
        <meta property="og:description" content={t('DDG Email Introduction')} />
        <meta name="description" content={t('DDG Email Introduction')} />
      </Head>
      <Box minH="100vh" bg="gray.50" {...props}>
        <Nav />
        <Center minH="80vh">
          <Flex
            h="500px"
            w="600px"
            bgColor="white"
            boxShadow="base"
            rounded="lg"
            color="black"
            p={{ base: '1.5rem', md: '5rem' }}
            m={{ base: '1rem' }}
            mt="2rem"
            align="center"
            direction="column"
            justify="center"
          >
            {children}
          </Flex>
        </Center>
        <Center>
          <Text px={{ base: '2rem' }} fontSize="xs" w="600px" align="center" color="blackAlpha.500">
            {t('DDG Email Panel respects your privacy')}
          </Text>
        </Center>
      </Box>
    </>
  )
}
