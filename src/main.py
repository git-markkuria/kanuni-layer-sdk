from modules.redactor import redactor


def main(prompt: str, opted_out: bool) -> str:
    return redactor(prompt, opted_out)


if __name__ == "__main__":
    response = main(
        "My name is Brian, I am blind. I would like to get directions to the nearest grocery store.",
        True,
    )

    print(response)
