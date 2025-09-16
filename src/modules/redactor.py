def redactor(prompt: str, opted_out: bool) -> str:
    if opted_out:
        return prompt

    return "Hey, I'm a redactor!"
