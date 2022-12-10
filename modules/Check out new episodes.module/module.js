{% for item in module.field_group %}
	{% if item.image_field.src %}
		{% set sizeAttrs = 'width="{{ item.image_field.width }}" height="{{ item.image_field.height }}"' %}
		{% if item.image_field.size_type == 'auto' %}
			{% set sizeAttrs = 'style="max-width: 100%; height: auto;"' %}
		{% elif item.image_field.size_type == 'auto_custom_max' %}
			{% set sizeAttrs = 'width="{{ item.image_field.max_width }}" height="{{ item.image_field.max_height }}" style="max-width: 100%; height: auto;"' %}
		{% endif %}
		 {% set loadingAttr = item.image_field.loading != 'disabled' ? 'loading="{{ item.image_field.loading }}"' : '' %}
		<img src="{{ item.image_field.src }}" alt="{{ item.image_field.alt }}" {{ loadingAttr }} {{ sizeAttrs }}>
	{% endif %}
	{% inline_text field="episode_no" value="{{ item.episode_no }}" %}
	{% inline_text field="text_field" value="{{ item.text_field }}" %}
      
      
	
{% endfor %}

