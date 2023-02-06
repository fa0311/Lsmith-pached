import { Flex, Input, InputWrapperBaseProps, NumberInput } from '@mantine/core'
import SizeSlider from './sizeSlider'

// 256 to 1024, 64 steps
export const SIZE_MARKS = Array.from({ length: 16 }, (_, i) => i * 64 + 256).map((v) => ({
  value: v,
  label: null,
}))

interface Props extends InputWrapperBaseProps {}

const SizeInput = (props: Props) => {
  return (
    <Input.Wrapper {...props}>
      <Flex align={'center'} gap={'sm'}>
        <SizeSlider w={'100%'} />
        <NumberInput min={256} max={1024} step={64} defaultValue={768} w={'100px'} />
      </Flex>
    </Input.Wrapper>
  )
}

export default SizeInput
