import re
import json

def find_class_mappings(original_css_file, compiled_css_file):
    original_classes = {}
    compiled_classes = {}

    # 提取原版 CSS 文件中的类名和对应样式
    with open(original_css_file, 'r') as f:
        original_content = f.read()
        original_matches = re.findall(r'\.([^{]+)\s*\{([^}]+)\}', original_content)
        for class_name, styles in original_matches:
            original_classes[class_name.strip()] = styles.strip()

    # 提取编译后 CSS 文件中的类名和对应样式
    with open(compiled_css_file, 'r') as f:
        compiled_content = f.read()
        compiled_matches = re.findall(r'\.([^{]+)\s*\{([^}]+)\}', compiled_content)
        for class_name, styles in compiled_matches:
            compiled_classes[class_name.strip()] = styles.strip()

    # 对比两个字典，找出对应关系
    class_mappings = {}
    for compiled_class, compiled_style in compiled_classes.items():
        for original_class, original_style in original_classes.items():
            if compiled_style == original_style:
                class_mappings[compiled_class] = original_class

    return class_mappings

def save_mappings_to_file(class_mappings, output_file):
    with open(output_file, 'w') as f:
        json.dump(class_mappings, f, indent=4)

# 指定原版和编译后的 CSS 文件路径
original_css_file = 'components.css'
compiled_css_file = 'compiled.css'
output_file = 'class_mappings.json'

# 找出类名对应关系
mappings = find_class_mappings(original_css_file, compiled_css_file)

# 将类名对应关系存储到新文件中
save_mappings_to_file(mappings, output_file)
