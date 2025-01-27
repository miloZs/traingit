import Button from "../app/components/Button/Button";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <h1 className="text-4xl mb-6">Button Variants</h1>

        <h3 className="text-xl mb-4">Flavours</h3>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="Small" flavours="Primary" roundness="Base">
            Primary
          </Button>
          <Button size="Small" flavours="Success" roundness="Base">
            Success
          </Button>
          <Button size="Small" flavours="Warning" roundness="Base">
            Warning
          </Button>
          <Button size="Small" flavours="Danger" roundness="Base">
            Danger
          </Button>
          <Button size="Small" flavours="Inverse" roundness="Base">
            Inverse
          </Button>
          <Button size="Small" flavours="Purple" roundness="Base">
            Purple
          </Button>
        </div>

        <h3 className="text-xl font-medium mb-4">Sizes</h3>

        <div className="flex flex-wrap justify-center gap-4 items-center">
          <Button size="Small" flavours="Primary" roundness="Base">
            Small
          </Button>
          <Button size="Medium" flavours="Success" roundness="Base">
            Medium
          </Button>
          <Button size="Large" flavours="Warning" roundness="Base">
            Large
          </Button>
          <Button size="Extra Large" flavours="Danger" roundness="Base">
            Extra Large
          </Button>
        </div>

        <h3 className="text-xl font-medium mb-4">Roundness</h3>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="Small" flavours="Primary" roundness="Square">
            Square
          </Button>
          <Button size="Small" flavours="Success" roundness="Small">
            Small
          </Button>
          <Button size="Small" flavours="Warning" roundness="Base">
            Base
          </Button>
          <Button size="Small" flavours="Danger" roundness="Medium">
            Medium
          </Button>
          <Button size="Small" flavours="Inverse" roundness="Large">
            Large
          </Button>
          <Button size="Small" flavours="Purple" roundness="XL">
            XL
          </Button>
          <Button size="Small" flavours="Primary" roundness="2XL">
            2XL
          </Button>
          <Button size="Small" flavours="Success" roundness="Circular">
            Circular
          </Button>
        </div>
      </div>
    </div>
  );
}
