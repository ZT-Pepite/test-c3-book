# How to use this book?

The code of the projects in this book has been open sourced. You can download it from our GitHub repository and share your thoughts and questions on our official forum.

> GitHub: <https://github.com/espressif/book-esp32c3-iot-projects>  
> Forum: <https://www.esp32.com/bookc3>

Throughout the book, there will be parts highlighted as shown below.

> 📝 **Source code**
>
> In this book, we emphasise the combination of theory and practice, and thus set a **Practice** section about the Smart Light project in almost every chapter. Corresponding steps and source page will be provided in blockquotes beginning with the tag 📝 **Source code**.

> 📌 **Note** / 💡 **Tip**
>
> This is where you may find some critical information and reminding for successfully debugging your program. They will be marked in blockquotes beginning with the tag 📌 **Note** or 💡 **Tip**.

Most of the commands in this book are executed under Linux, prompted by the character “`$`”. If the command requires superuser privileges to execute, the prompt will be replaced by “`#`”. The command prompt on Mac systems is “`%`”, as used in Section 4.2.3 Installing ESP-IDF on Mac.

Commands or texts that need to be input by the user, and commands that can be entered by pressing the “Enter” key will be printed in **`bold`**.

## Example:

Second, use `esp-idf/components/nvs_flash/nvs_partition_generator/nvs_
partition_gen.py` to generate the NVS partition binary file on the development host with the following command:

<pre><code>$ <b>python $IDF_PATH/components/nvs_flash/nvs_partition_generator/nvs_partition_gen.py --input mass_prod.csv --output mass_prod.bin --size NVS_PARTITION_SIZE</b></code></pre>