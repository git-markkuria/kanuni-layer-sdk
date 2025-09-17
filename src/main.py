from modules.redactor import redactor


def main(prompt: str, opted_in: bool = True) -> str:
    return redactor(prompt, opted_in)


if __name__ == "__main__":
    response = main(
        "My name is Jiminy Cricket with email <Jiminy.Cricket@example.com>, I am blind and deaf and mute. I am also quadriplegia and I would like to get directions to the nearest shopping centre.",
    )

    print(response)
